import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "./TodoTextInput";

function Header({ addTodo }) {
    return (
        <header className="header">
            <h1>Todos</h1>
            <TodoTextInput
                newTodo= {true}
                onSave={(text) => {
                    if (text.length !== 0) {
                        addTodo(text);
                    }
                }}
            />
        </header>
    );
}

export default Header;
