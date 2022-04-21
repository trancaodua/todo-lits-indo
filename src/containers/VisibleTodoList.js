import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = (state) => ({
    filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispath) => ({
    actions: bindActionCreators(TodoActions, dispath),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
