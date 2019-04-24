import * as React from "react";

export default class TodoList extends React.Component<{}> {
    render() {
        return (<li className="list_item">
        <div className="title">now121212asdf</div>
        <div className="btn_area"><button type="button" className="btn">수정</button><button type="button"
                className="btn">삭제</button></div>
    </li>);
    }
}