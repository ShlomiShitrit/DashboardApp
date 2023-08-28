"use client"
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

import { Rows } from "../../Interfaces/interfaces";
import {
    getExpanseData,
    getExpanseDataToDelete,
} from "../../utils/clientUtils";
import { ordersDeleteBtnStyle } from "@/app/Styles/styles";
import { deleteData } from "@/app/utils/serverUtils";
import {
    ORDERS_TABLE_HEAD1,
    ORDERS_TABLE_HEAD2,
    ORDERS_TABLE_HEAD3,
    ORDERS_TABLE_HEAD4,
    ORDERS_TABLE_HEAD5,
    ORDERS_TABLE_HEAD1_FIELD,
    ORDERS_TABLE_HEAD2_FIELD,
    ORDERS_TABLE_HEAD3_FIELD,
    ORDERS_TABLE_HEAD4_FIELD,
    ORDERS_TABLE_HEAD5_FIELD,
    ORDERS_DELETE_BTN_VAR,
    ORDERS_DELETE_BTN_COLOR,
    ORDERS_DELETE_BTN_TXT,
} from "@/app/GeneralResources/resources";

import {
    ORDERS_TABLE_HEAD_WIDTH_150,
    ORDERS_TABLE_HEAD_WIDTH_450,
    ORDERS_DATA_GRID_PAGE_SIZE_OPTIONS,
    ORDERS_DATA_GRID_PAGE_SIZE_DEFAULT,
    ORDERS_DATA_GRID_DELETE_BTN_DIS,
} from "@/app/GeneralResources/constants";

const columns: GridColDef[] = [
    {
        field: ORDERS_TABLE_HEAD1_FIELD,
        headerName: ORDERS_TABLE_HEAD1,
        width: ORDERS_TABLE_HEAD_WIDTH_150,
    },
    {
        field: ORDERS_TABLE_HEAD2_FIELD,
        headerName: ORDERS_TABLE_HEAD2,
        width: ORDERS_TABLE_HEAD_WIDTH_150,
    },
    {
        field: ORDERS_TABLE_HEAD3_FIELD,
        headerName: ORDERS_TABLE_HEAD3,
        width: ORDERS_TABLE_HEAD_WIDTH_150,
    },
    {
        field: ORDERS_TABLE_HEAD4_FIELD,
        headerName: ORDERS_TABLE_HEAD4,
        width: ORDERS_TABLE_HEAD_WIDTH_150,
    },
    {
        field: ORDERS_TABLE_HEAD5_FIELD,
        headerName: ORDERS_TABLE_HEAD5,
        width: ORDERS_TABLE_HEAD_WIDTH_450,
    },
];

function Orders() {
    const [rows, setRows] = useState<Rows[]>([]);
    const [dataToDel, setDataToDel] = useState<Rows[]>([]);
    const [rowSelected, setRowSelected] = useState<GridRowSelectionModel>([]);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year);

    useEffect(() => {
        getExpanseData(setRows);
        getExpanseDataToDelete(setDataToDel);
    }, [orders]);

    const handleDelete = () => {
        const rowsWithId = Object.entries(dataToDel);

        const rowsToDelete = [];
        for (let i = 0; i <= rowSelected.length; i++) {
            const delRow = rowsWithId.filter(
                (row) => row[1].id === Number(rowSelected[i])
            );
            rowsToDelete.push(delRow);
        }
        rowsToDelete.pop();

        rowsToDelete.forEach(async (row) =>   {
           await deleteData(row[0][0]);
        });
    };

    return (
        <Fragment>
            <DataGrid
                rows={rows.filter((row) => row.year === Number(year.year))}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: ORDERS_DATA_GRID_PAGE_SIZE_DEFAULT,
                        },
                    },
                }}
                pageSizeOptions={ORDERS_DATA_GRID_PAGE_SIZE_OPTIONS}
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelected(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelected}
            />
            <Button
                sx={ordersDeleteBtnStyle}
                disabled={
                    rowSelected.length === ORDERS_DATA_GRID_DELETE_BTN_DIS
                }
                variant={ORDERS_DELETE_BTN_VAR}
                color={ORDERS_DELETE_BTN_COLOR}
                onClick={handleDelete}
            >
                {ORDERS_DELETE_BTN_TXT}
            </Button>
        </Fragment>
    );
}

export default Orders;
