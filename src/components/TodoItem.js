import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

export default function TodoItem({ todo, completeTodo, deleteTodo, editTodo }) {
    const [editing, setEditing] = useState(false);

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleSave = (id, text) => {
        if (text.length === 0) {
            deleteTodo(id);
        } else {
            editTodo(id, text);
        }

        setEditing(false);
    };

    return (
        <li
            className={classnames({
                completed: todo.completed,
                editing: editing,
            })}
        >
            {editing ? (
                <TodoTextInput text={todo.text} editing={editing} onSave={(text)=>handleSave(todo.id, text)} />
            ) : (
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)}
                    />
                    <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
                    <button className="destroy" onClick={() => deleteTodo(todo.id)} />
                </div>
            )}
        </li>
    );
}
