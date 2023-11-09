"use client";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

import { ordersActions } from "@/app/store/orders";
import { Rows } from "../../GeneralResources/interfaces";
import { ordersDeleteBtnStyle } from "@/app/GeneralResources/styles";
import { getDataFromDB, deleteFromDB } from "@/app/Firebase/firebaseFunc";
import EditOrdersDialog from "@/app/Components/EditOrders/EditOrdersDialog";
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
    FB_EXPANSES_URL,
    ORDERS_EXPANSES_URL,
    ORDERS_SORT,
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
    const [rowSelected, setRowSelected] = useState<GridRowSelectionModel>([]);
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataFromDB(setRows, FB_EXPANSES_URL);
    }, [orders]);

    const handleDelete = () => {
        rowSelected.forEach((row) => {
            deleteFromDB((ORDERS_EXPANSES_URL + row) as string);
            dispatch(ordersActions.delete());
        });
    };

    const rowToEdit = rows.filter((row) => row.id === rowSelected[0])[0];

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
                    sorting: {
                        sortModel: [
                            {
                                field: ORDERS_TABLE_HEAD1_FIELD,
                                sort: ORDERS_SORT,
                            },
                        ],
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
            <EditOrdersDialog
                open={editOpen}
                handleClose={() => setEditOpen(false)}
                data={rowToEdit}
                path={rowSelected[0] as string}
            />
            <Box sx={{ display: "flex", direction: "row" }}>
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
                <Button
                    // TODO: Add tooltip - "only can edit one expense at a time"
                    sx={{ ...ordersDeleteBtnStyle, marginLeft: "20px" }}
                    disabled={
                        rowSelected.length ===
                            ORDERS_DATA_GRID_DELETE_BTN_DIS ||
                        rowSelected.length > 1
                    }
                    variant={ORDERS_DELETE_BTN_VAR}
                    color={ORDERS_DELETE_BTN_COLOR}
                    onClick={() => setEditOpen(true)}
                >
                    Edit
                </Button>
            </Box>
        </Fragment>
    );
}

export default Orders;
