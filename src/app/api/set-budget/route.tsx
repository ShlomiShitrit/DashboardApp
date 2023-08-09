import { NextResponse, NextRequest } from "next/server";
import {
    UTILS_PATCH_METHOD,
    UTILS_HEADERS_APP_JSON,
} from "@/app/GeneralResources/resources";

export async function PATCH(req: NextRequest) {
    const res = await fetch(process.env.SET_BUDGET as string, {
        method: UTILS_PATCH_METHOD,
        body: req.body,
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
    const data = await res.json();
    return NextResponse.json(data);
}

export async function GET() {
    const res = await fetch(process.env.SET_BUDGET as string, {
        next: { revalidate: 1 },
    });

    const data = await res.json();
    return NextResponse.json(data);
}
