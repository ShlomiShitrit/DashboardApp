import { Fragment, useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Title from "./Title";
import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData } from "../../utils/clientUtils";

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

function Orders() {
    const [rows, setRows] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setRows);
    }, []);

    return (
        <Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Reason</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{` ${row.day}/${row.month}/${row.year}`}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.reason}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3, color: "text.primary" }}
            >
                See more orders
            </Link>
        </Fragment>
    );
}

export default Orders;
