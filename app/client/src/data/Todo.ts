export interface TodoData {
    content: string;
    id: number;
    complete: boolean;
}

export default class Todo implements TodoData {
    private _content: string;
    public get content(): string {
        return this._content;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    private _complete: boolean;
    public get complete(): boolean {
        return this._complete;
    }

    constructor(content: string, id: number, complete: boolean) {
        this._content = content;
        this._id = id;
        this._complete = complete;
    }
}