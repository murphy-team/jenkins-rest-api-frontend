import * as objectAssign from "object-assign";
import {Action} from "redux";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";
import {ToDoItemDTO} from "../domain/ToDoItemDTO";

export class ToDoPageState {
    _toDoPage: ToDoPageDTO;

    public constructor() {
        this._toDoPage = new ToDoPageDTO();
        this._toDoPage._toDoItems = new Array<ToDoItemDTO>();
        this._toDoPage._tableHeaderColumns = new Array<TableHeaderColumnDTO>();

        let singleHeader: TableHeaderColumnDTO;

        singleHeader = new TableHeaderColumnDTO();
        singleHeader._isKey = true;
        singleHeader._columnName = "Name";
        singleHeader._value = "name";
        singleHeader._width = "20%";
        this._toDoPage._tableHeaderColumns.push(singleHeader);

        singleHeader = new TableHeaderColumnDTO();
        singleHeader._isKey = false;
        singleHeader._columnName = "Description";
        singleHeader._value = "description";
        singleHeader._width = "20%";
        this._toDoPage._tableHeaderColumns.push(singleHeader);


    }
}

export function ToDoPageReducer(state: ToDoPageState = new ToDoPageState(), action: Action): ToDoPageState {
    let newState: ToDoPageState;
    let newPage: ToDoPageDTO;

    switch (action.type) {

        default:
            return state;
    }
}