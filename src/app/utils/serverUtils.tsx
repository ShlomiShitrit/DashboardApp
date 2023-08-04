import { Rows } from "../Interfaces/interfaces";

export const runtime = "edge";

export async function getData() {
    const res = await fetch(`http://localhost:3000/api/new-expanse`, {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    const dataArray = Object.values(data) as Rows[];
    return dataArray;
}

export async function postData(data: Rows) {
    await fetch(`http://localhost:3000/api/new-expanse`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
