"use server";
import { headers } from "next/headers";
import {
    Rows,
    DataToBarChart,
    DataToLineChart,
} from "../Interfaces/interfaces";

export async function getData() {
    const host = headers().get("host");
    const res = await fetch(`http://${host}/api/new-expanse`, {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    const dataArray = Object.values(data) as Rows[];
    return dataArray;
}

export async function postData(data: Rows) {
    const host = headers().get("host");
    await fetch(`http://${host}/api/new-expanse`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
