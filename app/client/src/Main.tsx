import * as React from "react";
import Todo from './data/Todo';
import TodoContainer from "./component/TodoContainer";

export default class Main extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className="wrapper">
                <header className="header">
                    <h1 className="title">TODOLIST</h1>
                    <TodoContainer/>
                </header>
            </div>
    }
}