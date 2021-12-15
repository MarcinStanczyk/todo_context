import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import TodoContext from '../../../store/todo-context';
import {useContext} from "react";
const TodoList = () => {

    const ctx = useContext(TodoContext)

    return (
                        <div className={classes.todoList}>
                            {
                                ctx ?
                                ctx.todos.map((el, idx)=>{
                                    console.log('CTX', el)
                                    return (
                                        <div key={idx}>
                                            <TodoItem todoName={el.name} todoPriori={el.priori} todoID={el.id} />
                                            <div/>
                                        </div>
                                    )
                                }
                                ) : <p>Nie znaleziono</p>
                            }
                        </div>
    )
}

export default TodoList;