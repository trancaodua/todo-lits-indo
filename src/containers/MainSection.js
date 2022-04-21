import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import { getCompletedTodoCount } from "../selectors";
import MainSection from '../components/MainSection'

const mapStateToProps = (state) => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
