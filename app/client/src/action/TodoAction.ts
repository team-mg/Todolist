import ActionTypes, {Types} from './ActionTypes';
import Todo from '../data/Todo';

export interface Action {
    type: string;
    payload: any;
}
interface actions {
    add(Todo:Todo): Action;
    delete(id:number): Action;
    update(id:number, content:string): Action;
}

const TodoAction:actions = {
    add: (Todo:Todo): Action => {
        return {
            type: ActionTypes.ADD,
            payload: {
                todo: Todo
            }
        }
    },

    delete: (id:number): Action => {
        return {
            type: ActionTypes.DELETE,
            payload: {
                id: id
            }
        }
    },
    update: (id:number, content:string): Action => {
        return {
            type: ActionTypes.UPDATE,
            payload: {
                id: id,
                content: content
            }
        }
    }
};
export default TodoAction;