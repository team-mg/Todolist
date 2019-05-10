import * as React from "react";
import Todo from "../data/Todo";
import { connect } from "react-redux";
import { Action } from "redux";
import TodoAction from '../action/TodoAction';
import * as styles from '../../scss/component/list.scss';

interface States {
    mode: string;
    title: string;
}
const MODE = {
    EDIT: 'edit',
    VIEW: 'view'
};

const mapStateToProps = (state: any) => {
    return state;
};
const mapDispatchToProps = (dispatch:React.Dispatch<Action>) => {
    return {
        onEditClick: (id: number, msg: string) => dispatch(TodoAction.update(id, msg)),
        onRemoveClick: (id: number) => (e:React.MouseEvent<HTMLButtonElement>) => dispatch(TodoAction.delete(id))
    };
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
    todo: Todo
};
type Props = StateProps & DispatchProps & OwnProps;
class TodoList extends React.Component<Props, States> {
    private initialState = {
        mode: MODE.VIEW,
        title: ''
    }
    private titleRef:HTMLInputElement;
    constructor(props:Props) {
        super(props);

        this.state = Object.assign({}, this.initialState, {title: this.props.todo.content});
    }
    render() {
        let titleView:React.ReactElement;
        let editBtn:React.ReactElement;
        let cName:string;
        let btnCName:string;
        if (this.state.mode === MODE.EDIT){
            titleView = <input type="text" className={styles.input_text} defaultValue={this.state.title} ref={(ref:HTMLInputElement) => (this.titleRef = ref)}/>
            editBtn = <button type="button" onClick={this.onClickUpdate.bind(this)}>업데이트</button>
            cName = styles.input_container;
            btnCName = styles.btn_input_area;
        } else {
            titleView = <div className={styles.title}>{this.state.title}</div>
            editBtn = <button type="button" onClick={this.onClickEdit.bind(this)}>수정</button>
            cName = styles.title_container;
            btnCName = styles.btn_area;
        }
        return (<li className={styles.list_item}>
            <span className={cName}>{titleView}</span>
            
            <div className={btnCName}>
            {editBtn}
            <button type="button" 
                    onClick={this.props.onRemoveClick(this.props.todo.id)}>삭제</button>
            </div>
        </li>);
    }
    onClickUpdate(e:React.MouseEvent<HTMLButtonElement>) {
        const value = this.titleRef.value;
        this.props.onEditClick(this.props.todo.id, value);
        this.setState({mode: MODE.VIEW, title: value});
    }
    onClickEdit(e:React.MouseEvent<HTMLButtonElement>) {
        this.setState({mode: MODE.EDIT});
    }
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(TodoList);