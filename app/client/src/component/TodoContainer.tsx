import * as React from 'react';
import TodoList from './TodoList';
import Todo from '../data/Todo';

interface Props {
    todos: Todo[];
}
export default class TodoContainer extends React.Component<Props, {}> {
    render() {
        return <div className="content">
                    <div className="write_form_area">
                        <label htmlFor="todoText" className="blind">할 일</label>
                        <input type="text" id="todoText" className="input_text" placeholder="어떤 일을 하셔야 하나요?" autoComplete="off"/>
                        <button type="button" className="btn">등록</button>
                    </div>
                    <div className="todolist_area">
                        <ul className="list_todolist">
                            {this.props.todos.map(todo => {
                                return <TodoList/>
                            })}
                        </ul>
                    </div>
                </div>
    }
}