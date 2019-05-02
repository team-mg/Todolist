import * as React from "react";
import TodoContainer from "./component/TodoContainer";
import * as style from '../scss/component/main.scss';

export default class Main extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        console.log(style);
        return <div className={style.wrapper}>
                <header className="header">
                    <h1 className={style.title}>TODOLIST</h1>
                    <TodoContainer/>
                </header>
            </div>
    }
}