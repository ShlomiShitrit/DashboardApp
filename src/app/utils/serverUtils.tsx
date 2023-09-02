import { Rows, BudgetObj } from "../Interfaces/interfaces";
import {
    UTILS_NEW_EXPANSE_URL,
    UTILS_SET_BUDGET_URL,
    UTILS_POST_METHOD,
    UTILS_PATCH_METHOD,
    UTILS_EDGE_RUNTIME,
    UTILS_HEADERS_APP_JSON,
    UTILS_DELETE_METHOD,
    UTILS_DELETE_EXPANSE_URL,
    UTILS_CATEGORIES_URL,
} from "@/app/GeneralResources/resources";

import {
    SERVER_UTILS_REVALID_10,
    SERVER_UTILS_REVALID_1,
} from "@/app/GeneralResources/constants";

export const runtime = UTILS_EDGE_RUNTIME;

export async function getData() {
    const res = await fetch(UTILS_NEW_EXPANSE_URL, {
        next: { revalidate: SERVER_UTILS_REVALID_10 },
    });
    const data = await res.json();
    const dataArray = Object.values(data) as Rows[];
    return dataArray;
}

export async function getDataToDelete() {
    const res = await fetch(UTILS_NEW_EXPANSE_URL, {
        next: { revalidate: SERVER_UTILS_REVALID_10 },
    });
    const data = await res.json();
    return data;
}

export async function postData(data: Rows) {
    await fetch(UTILS_NEW_EXPANSE_URL, {
        method: UTILS_POST_METHOD,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
}

export async function deleteData(url: string) {
    await fetch(UTILS_DELETE_EXPANSE_URL, {
        method: UTILS_DELETE_METHOD,
        body: JSON.stringify({ url: url }),
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
}

export async function patchBudget(data: BudgetObj) {
    await fetch(UTILS_SET_BUDGET_URL, {
        method: UTILS_PATCH_METHOD,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
}

export async function getBudget() {
    const res = await fetch(UTILS_SET_BUDGET_URL, {
        next: { revalidate: SERVER_UTILS_REVALID_1 },
    });
    const data = await res.json();
    return data;
}

export async function getCategories() {
    const res = await fetch(UTILS_CATEGORIES_URL, {
        next: { revalidate: SERVER_UTILS_REVALID_1 },
    });
    const data = await res.json();
    return data;
}

export async function postCategories(data: string) {
    await fetch(UTILS_CATEGORIES_URL, {
        method: UTILS_POST_METHOD,
        body: JSON.stringify({ category: data }),
        headers: {
            "Content-Type": UTILS_HEADERS_APP_JSON,
        },
    });
}
