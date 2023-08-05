import { NextResponse, NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
    const res = await fetch(
        `https://dashboardapp-3b93c-default-rtdb.europe-west1.firebasedatabase.app/budgets.json`,
        {
            method: "PATCH",
            body: req.body,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await res.json();
    return NextResponse.json(data);
}

export async function GET() {
    const res = await fetch(
        `https://dashboardapp-3b93c-default-rtdb.europe-west1.firebasedatabase.app/budgets.json`,
        {
            next: { revalidate: 1 },
        }
    );

    const data = await res.json();
    return NextResponse.json(data);
}
