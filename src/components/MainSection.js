import React from "react";
import PropTypes from "prop-types";
import VisibleTodoList from "../containers/VisibleTodoList";

function MainSection({ todosCount, comppletedCount, actions }) {
    return (
        <section className="main">
            {!!todosCount && (
                <span>
                    <input className="toggle-all" type="checkbox" readOnly />
                    <label onClick={actions.completeAllTodos} />
                </span>
            )}

            <VisibleTodoList />
         
        </section>
    );
}

export default MainSection;
