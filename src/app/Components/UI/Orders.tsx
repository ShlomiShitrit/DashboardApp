import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Title from "./Title";
import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData } from "../../utils/clientUtils";
import { ordersLinkStyle } from "../../Styles/styles";
import {
    ORDERS_TABLE_TITLE,
    ORDERS_TABLE_SIZE,
    ORDERS_TABLE_HEAD1,
    ORDERS_TABLE_HEAD2,
    ORDERS_TABLE_HEAD3,
    ORDERS_TABLE_HEAD4,
    ORDERS_TABLE_HEAD5,
    ORDERS_TABLE_LINK_HREF,
    ORDERS_TABLE_LINK_TXT,
} from "@/app/GeneralResources/resources";

function Orders() {
    const [rows, setRows] = useState<Rows[]>([]);
    const [showItems, setShowItems] = useState<number>(10);
    const orders = useSelector((state: any) => state.orders);

    const handleShowMore = () => {
        const newShowItems =
            showItems >= rows.length ? showItems : showItems + 5;
        setShowItems(newShowItems);
    };

    useEffect(() => {
        getExpanseData(setRows);
    }, [orders]);

    return (
        <Fragment>
            <Title>{ORDERS_TABLE_TITLE}</Title>
            <Table size={ORDERS_TABLE_SIZE}>
                <TableHead>
                    <TableRow>
                        <TableCell>{ORDERS_TABLE_HEAD1}</TableCell>
                        <TableCell>{ORDERS_TABLE_HEAD2}</TableCell>
                        <TableCell>{ORDERS_TABLE_HEAD3}</TableCell>
                        <TableCell>{ORDERS_TABLE_HEAD4}</TableCell>
                        <TableCell>{ORDERS_TABLE_HEAD5}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(0, showItems).map((row) => (
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
                href={ORDERS_TABLE_LINK_HREF}
                onClick={handleShowMore}
                sx={ordersLinkStyle}
            >
                {ORDERS_TABLE_LINK_TXT}
            </Link>
        </Fragment>
    );
}

export default Orders;
