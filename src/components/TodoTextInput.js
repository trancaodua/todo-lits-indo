import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TodoTextInput({ onSave, text, placeholder, editing, newTodo }) {
    let [state, setState] = useState(text || "");

    const handleSubmit = (e) => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            onSave(text);
            if (newTodo) {
                setState("");
            }
        }
    };

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const handleBlur = (e) => {
        if (!newTodo) {
            onSave(e.target.value);
        }
    };

    return (
        <input
            className={classnames({ edit: editing, "new-todo": newTodo })}
            type="text"
            placeholder={placeholder}
            autoFocus={true}
            value={state}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleSubmit}
        />
    );
}

export default TodoTextInput;
