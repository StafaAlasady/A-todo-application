function TodoItem(props){
    const {text, done} = props;

    return <li className={done ? "todo-item done" : "todo-item"}>{text}</li>;
}

export default TodoItem;