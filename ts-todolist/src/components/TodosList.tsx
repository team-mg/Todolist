import * as React from 'react'
import Todo from '../models/Todo'

interface Props {
    todos: Todo[],
    onTodoClicked: (todoId: number) => void
}
interface State { }

export default class AddTodoForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const { todos, onTodoClicked } = this.props
        return (
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}
                            onClick={() => onTodoClicked(todo.id)}
                            style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}>
                            {todo.name}
                        </li>)
                    )
                }
            </ul>
        )
    }
}