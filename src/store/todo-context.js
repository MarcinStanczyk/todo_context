import React, {useEffect, useState} from 'react'

const TodoContext = React.createContext(
    {
        todos: [ {name: '', priori: ''} ],
        addTodo: (todoItem) => {},
        removeTodo: (id) => {}
    })

export const TodoContextProvider = (props) => {
    const [todoState, setTodoState] = useState([])

    useEffect(()=>{
        const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'))
        if(todosFromLocalStorage) {
            console.log('todosFromLocalStorage', todosFromLocalStorage)
            setTodoState(todosFromLocalStorage)
        }
    }, [])

    const addTodo = (todoItem) => {
        console.log('ADD', todoItem)
        setTodoState((prevState) => {
            localStorage.setItem('todos', JSON.stringify([...prevState,todoItem]))
            return (
                [
                    ...prevState,
                    todoItem
                ]
            )
        })
    }

    const removeTodo = (todoItemID) => {
        setTodoState((prevState) => {
            const newTodos = prevState.filter((el, idx) => {
                return ( el.id !== todoItemID )
            })
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todos: todoState,
                addTodo,
                removeTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;