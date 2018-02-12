import * as React from "react";

import {InputTableBase} from "./InputTableBase";
import {ToDoItemDTO} from "../domain/ToDoItemDTO";

export interface IToDoTableComponentProps {
    columnList: Array<String>;
    dataList: Array<ToDoItemDTO>;
}

export class ToDoTableComponent extends InputTableBase {
    public constructor(props: IToDoTableComponentProps) {
        super(props)
    }

}