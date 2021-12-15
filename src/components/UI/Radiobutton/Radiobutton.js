import classes from './Radiobutton.module.css';
const RadioButton = (props) => {
    return (
        <>
        <input onChange={props.onClick} type="radio" name="select" id={props.id} />
            <label htmlFor={props.id} className={classes.option}>
                <div className={classes.dot}></div>
                <span>{props.title}</span>
            </label>
        </>
    );
};

export default RadioButton