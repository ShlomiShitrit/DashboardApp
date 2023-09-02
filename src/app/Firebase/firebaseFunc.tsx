import db from "./db";
import { ref, set, remove, update, get, child } from "firebase/database";

export const writeToDB = (path: string, data: any) => {
    set(ref(db, path), data);
};

export const readFromDB = (path: string) => {
    const dbRef = ref(db);
    const data: Promise<string[]> = get(child(dbRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        } else {
            throw new Error("No data available");
        }
    });
    return data;
};

export const deleteFromDB = (path: string) => {
    remove(ref(db, path));
};

export const updateDB = (path: string, data: any) => {
    update(ref(db, path), data);
};
