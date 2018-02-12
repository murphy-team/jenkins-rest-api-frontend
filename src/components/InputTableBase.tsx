import * as React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

export interface IInputTableProps {
    dataList: any[];
    columnList: any[];
    onEditCell?: (row) => any;
}

export interface IInputTableState {

}

export class InputTableBase extends React.Component<IInputTableProps, IInputTableState> {

    public constructor(props: IInputTableProps) {
        super(props);
    }

    public buildTableColumn() {
        let columnList = [];

        if (this.props.columnList != null) {
            this.props.columnList.map((column) => {
                if (column._isKey) {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        isKey
                        dataSort={true}
                        dataField={column._columnName}
                        editable={ true }
                        width={column._width}>
                        {column._value}
                    </TableHeaderColumn>);
                } else {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        dataSort={true}
                        dataField={column._columnName}
                        editable={ { type: 'textarea'} }
                        width={column._width}>
                        {column._value}
                    </TableHeaderColumn>);
                }
            });
        }

        return columnList;
    }

    private beforeSaveCell(row, cellName, cellValue){
        if(cellValue === ""){
            return false;
        } else {
            return true;
        }
    }

    private afterSaveCell(row, cellName, cellValue) {
        this.props.onEditCell(row);
    }

    render() {
        const style = {
            margin: 10,
        };
        return (
            <div>
                <BootstrapTable data={this.props.dataList}
                                pagination={ true }
                                insertRow={ true }
                                striped hover
                                tableStyle = {style}
                                cellEdit={{mode: 'click', blurToSave: true, beforeSaveCell: this.beforeSaveCell.bind(this), afterSaveCell: this.afterSaveCell.bind(this)}}
                                ignoreSinglePage
                                deleteRow={ true }
                                selectRow={{mode: 'checkbox'}}>
                    {this.buildTableColumn()}
                </BootstrapTable>
            </div>
        );
    }
}