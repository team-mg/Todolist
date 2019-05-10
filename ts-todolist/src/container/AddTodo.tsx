import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import AddTodoForm from '../components/AddTodoForm'

export default connect<any, any, any>(null, {
    handleSubmit: addTodo
})(AddTodoForm)