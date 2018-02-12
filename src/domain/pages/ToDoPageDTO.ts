import {ToDoItemDTO} from "../ToDoItemDTO";
import {TableHeaderColumnDTO} from "../TableHeaderColumnDTO";

export class ToDoPageDTO {
    _toDoItems: Array<ToDoItemDTO>;
    _tableHeaderColumns: Array<TableHeaderColumnDTO>;

    public constructor() {
        this._toDoItems = null;
        this._tableHeaderColumns = null;
    }
}