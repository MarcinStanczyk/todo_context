import classes from './TodoForm.module.css';
import RadioButton from '../../UI/Radiobutton/Radiobutton'
import {getCLS} from "web-vitals";
import {useContext, useRef, useState} from "react";
import TodoContext from "../../../store/todo-context";

const TodoForm = () => {
    const ctx = useContext(TodoContext)
    const [formValue, setFormValue] = useState({name: '', priori: 'L', id: JSON.stringify(Math.random() * 111)})
    // const nameValue = useRef()
    // const prioriValue = useRef()
    const formSubmitHandler = (e) => {
        e.preventDefault()
        setFormValue((prevState)=> {
            return {
                ...prevState,
                id: JSON.stringify(Math.random() * 111)
            }
        })

        console.log('form', JSON.stringify(formValue))
        ctx.addTodo(formValue)
    }

    const todoNameChangeHandler = (e) => {
        setFormValue((precvState) => {
            return {
                ...precvState,
                name: e.target.value
            }
        })
    }

    const todoPrioriChangeHandler = (e) => {
        const newState = {...formValue}
        switch(e.target.id) {
            case '1':
                setFormValue((prevState) => {
                    return {
                        ...prevState,
                        priori: 'L'
                    }
            })
                break;
            case '2':
            setFormValue((prevState) => {
                return {
                    ...prevState,
                    priori: 'M'
                }
            })
                break;
            case '3':
                setFormValue((prevState) => {
                    return {
                        ...prevState,
                        priori: 'H'
                    }
                })
                break;

        }
    }
    return (
        <div className={classes.todoForm}>
                <form onSubmit={formSubmitHandler}>
                    <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                            What needs to be done?
                        </label>
                    </h2>
                    <label htmlFor="newTodoName">Enter your username:</label>
                    <input
                        type="text"
                        id="newTodoName"
                        name="newTodoName"
                        autoComplete="off"
                        onChange={todoNameChangeHandler}
                    />
                    <div className={classes.chosePriori}>
                        <RadioButton onClick={todoPrioriChangeHandler} id="1" title="L" />
                        <RadioButton onClick={todoPrioriChangeHandler} id="2" title="M" />
                        <RadioButton onClick={todoPrioriChangeHandler} id="3" title="H" />
                    </div>
                    <button type="submit" className="btn btn__primary btn__lg">
                        Add
                    </button>
                </form>
        </div>
    )
}

export default TodoForm;