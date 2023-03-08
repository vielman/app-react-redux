import { connect } from 'react-redux';
import TodoList from '../pure/TodoList';
import { toggleTodo } from '../../store/actions/actions';


//Filter Todo List
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_ACTIVE':
            return todos.filter( (todo) => !todo.completed);

        case 'SHOW_COMPLETED':
            return todos.filter( (todo) => todo.completed);

        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosStates, state.filterStates)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer