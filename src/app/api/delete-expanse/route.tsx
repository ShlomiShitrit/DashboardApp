import { NextResponse, NextRequest } from "next/server";
import {
    UTILS_DELETE_METHOD,
    UTILS_DOT_JSON,
} from "@/app/GeneralResources/resources";
import { API_REVALID_1 } from "@/app/GeneralResources/constants";

export async function DELETE(req: NextRequest) {
    const requestData = await req.json();
    const url = requestData.url;
    const res = await fetch(process.env.DELETE_EXPANSE + url + UTILS_DOT_JSON, {
        next: { revalidate: API_REVALID_1 },
        method: UTILS_DELETE_METHOD,
    });

    const data = await res.json();
    return NextResponse.json(data);
}
