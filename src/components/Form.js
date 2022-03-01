import React from "react";


const form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        props.setTodos([
            ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 1000}
        ])
        props.setInputText('')
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    } 


    return (
        <form>
            <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos"className="filter-todo" onChange={statusHandler}>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default form