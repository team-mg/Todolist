import ActionTypes, {Types} from './ActionTypes';
import Todo from '../data/Todo';

export interface Action {
    type: string;
    payload: any;
}
export default class TodoAction {
    public add(Todo:Todo): Action {
        return {
            type: ActionTypes.ADD,
            payload: {
                todo: Todo
            }
        }
    }

    public delete(id:number): Action {
        return {
            type: ActionTypes.DELETE,
            payload: {
                id: id
            }
        }
    }
    public update(id:number, content:string): Action {
        return {
            type: ActionTypes.UPDATE,
            payload: {
                id: id,
                content: content
            }
        }
    }
}