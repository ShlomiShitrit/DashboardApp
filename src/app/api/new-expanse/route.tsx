import { NextResponse, NextRequest } from "next/server";
import {
    UTILS_POST_METHOD,
    UTILS_HEADERS_APP_JSON,
} from "@/app/GeneralResources/resources";
import { API_REVALID_1 } from "@/app/GeneralResources/constants";

export async function POST(req: NextRequest) {
    const res = await fetch(process.env.NEW_EXPANSE as string, {
        method: UTILS_POST_METHOD,
        body: req.body,
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
    const data = await res.json();
    return NextResponse.json(data);
}

export async function GET() {
    const res = await fetch(process.env.NEW_EXPANSE as string, {
        next: { revalidate: API_REVALID_1 },
    });

    const data = await res.json();
    return NextResponse.json(data);
}
