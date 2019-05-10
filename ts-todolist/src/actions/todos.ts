import Todo from '../models/Todo'

export enum ActionTypes {
    ADD_TODO = 'ACTION ADD_TODO',
    UPDATE_TODO = 'ACTION UPDATE_TODO',
    DELETE_TODO = 'ACTION DELETE_TODO',
}



export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface UpdateTodoAction { type: ActionTypes.UPDATE_TODO, payload: { todoId: number, text: string, done: boolean }}
export interface DeleteTodoAction { type: ActionTypes.DELETE_TODO, payload: { todoId: number } }



let nextId = 0;
export function addTodo(text: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                text: text,
                done: false,
            }
        }
    }
}
export function updateTodo(todoId: number, text: string, done: boolean) {
    return {
        type: ActionTypes.UPDATE_TODO,
        payload: {
            todoId,
            text: text,
            done: done,
        }
    }
}
export function deleteTodo(todoId: number) {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: { todoId }
    }
}



export type Action = AddTodoAction | UpdateTodoAction | DeleteTodoAction