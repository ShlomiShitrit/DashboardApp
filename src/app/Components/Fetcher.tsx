"use server";
import { headers } from "next/headers";

interface Rows {
    id: number;
    day: number;
    month: number;
    year: number;
    name: string;
    reason: string;
    amount: number;
}

async function Getter() {
    const host = headers().get("host");
    const res = await fetch(`http://${host}/api/new-expanse`, {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    const dataArray = Object.values(data) as Rows[];
    return dataArray;
}

export async function Poster(data: Rows) {
    const host = headers().get("host");
    await fetch(`http://${host}/api/new-expanse`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export default Getter;
