import { Fragment, useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Getter from "./Fetcher";

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

interface Rows {
    id: number;
    day: number;
    month: number;
    year: number;
    name: string;
    reason: string;
    amount: number;
}
function getData(callback: (data: Rows[]) => void) {
    const rows: Rows[] = [];
    Getter().then((data) => {
        const rows: Rows[] = data;
        callback(rows);
    });
    return rows;
}

function Orders() {
    const [rows, setRows] = useState<Rows[]>([]);
    useEffect(() => {
        getData(setRows);
    }, []);
    return (
        <Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Reason</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{` ${row.day}/${row.month}/${row.year}`}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.reason}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3 }}
            >
                See more orders
            </Link>
        </Fragment>
    );
}

export default Orders;
