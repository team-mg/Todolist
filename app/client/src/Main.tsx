import * as React from "react";
import Todo from './data/Todo';

const TODOS:Todo[] = [
    new Todo('aaaaaaa', 1, false),
    new Todo('aaaaaaa', 2, false),
    new Todo('aaaaaaa', 3, false),
    new Todo('aaaaaaa', 4, false),
    new Todo('aaaaaaa', 5, false),
    new Todo('aaaaaaa', 6, false),
    new Todo('aaaaaaa', 7, false)
];
export default class Main extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return <div className="wrapper">
        <header className="header">
            <h1 className="title">TODOLIST</h1>
        </header>
        </div>
    }
}