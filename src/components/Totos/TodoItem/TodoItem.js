import classes from './TodoItem.module.css';
import TodoContext from '../../../store/todo-context'
import {useContext} from "react";

const TodoItem = (props) => {
    const ctx = useContext(TodoContext)
    const removeHandler = () => {
        console.log('props.todoID', props.todoID)
        ctx.removeTodo(props.todoID)
    }
  return (
    <div className={classes.item}>
        <p>{props.todoName}</p>
        <p>{props.todoPriori}</p>
        <p>{props.todoID}</p>
        <span className={classes.buttonIcon} onClick={removeHandler}> ❌ </span>
        <span> ✅ </span>

      {/*<Card>*/}
      {/*  <header>*/}
      {/*    <h3>{title}</h3>*/}
      {/*    <div className={classes.price}>${price.toFixed(2)}</div>*/}
      {/*  </header>*/}
      {/*  <p>{description}</p>*/}
      {/*  <div className={classes.actions}>*/}
      {/*    <button onClick={addToCardHandler}>Add to Cart</button>*/}
      {/*  </div>*/}
      {/*</Card>*/}
    </div>
  );
};

export default TodoItem;
