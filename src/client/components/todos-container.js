import { allTodos } from './reducers';
import * as actions from './actions';
import { connect } from 'react-redux';
import TodosView from './todos-view';
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
	return ({
		todos: allTodos(state)
	});
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
        fetchTodos: actions.fetchTodos
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
