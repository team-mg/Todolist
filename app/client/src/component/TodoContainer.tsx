import * as React from 'react';
import TodoList from './TodoList';
import Todo from '../data/Todo';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import TodoAction from '../action/TodoAction';

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        todos: state ? state.todos : {}
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onAdd: (todo: Todo) => dispatch(TodoAction.add(todo))
    }
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

class TodoContainer extends React.Component<Props, {}> {
    private todoText: HTMLInputElement;
    private count: number;
    constructor(props:Props) {
        super(props);
        this.count = 0;
    }
    render() {
        const todoList = this.props.todos ? this.props.todos.map((todo:Todo) => (<TodoList key={todo.id} todo={todo}/>)) : '';
        return <div className="content">
                    <div className="write_form_area">
                        <label htmlFor="tText" className="blind">할 일</label>
                        <input type="text" id="tText" ref={(ref:HTMLInputElement) => (this.todoText = ref)} className="input_text" placeholder="어떤 일을 하셔야 하나요?" autoComplete="off"/>
                        <button type="button" className="btn" onClick={this.onAddClick.bind(this)}>등록</button>
                    </div>
                    <div className="todolist_area">
                        <ul className="list_todolist">
                        {todoList}
                        </ul>
                    </div>
                </div>
    }

    onAddClick(e:React.MouseEvent<HTMLButtonElement>) {
        this.count++;

        this.props.onAdd(new Todo(this.todoText.value, this.count, false));
    }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(TodoContainer);