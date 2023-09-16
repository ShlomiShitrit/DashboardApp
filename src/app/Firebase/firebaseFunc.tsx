import db, { auth } from "@/app/Firebase/db";
import { ref, set, remove, update, get } from "firebase/database";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import {
    FB_DOT,
    FB_COMMA,
    FB_USERS_URL,
    FB_NO_DATA_ERR,
    FB_NO_USER_ERR,
    UTILS_EDGE_RUNTIME,
    FB_NO_PARAM_ERR,
    FB_BUDGET,
    FB_ROWS,
    FB_EXPANSES_URL_EX,
} from "@/app/GeneralResources/resources";

export const runtime = UTILS_EDGE_RUNTIME;

export const writeToDB = (path: string, data: any) => {
    set(ref(db, path), data);
};

export const getDataFromDB = (
    callback: Function,
    path: string,
    typeOfCB: string = FB_ROWS
) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const newEmail = user?.email?.replace(FB_DOT, FB_COMMA);
            get(ref(db, FB_USERS_URL + newEmail + path))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        if (typeOfCB === FB_ROWS) {
                            callback(Object.values(snapshot.val()));
                        } else if (typeOfCB === FB_BUDGET) {
                            callback(snapshot.val());
                        } else {
                            throw new Error(FB_NO_PARAM_ERR);
                        }
                    } else {
                        throw new Error(FB_NO_DATA_ERR);
                    }
                })
                .catch((err) => {
                    switch (err.message) {
                        case FB_NO_DATA_ERR:
                            callback([]);
                            break;
                        case FB_NO_PARAM_ERR:
                            callback({});
                            break;
                        default:
                            return;
                    }
                });
        }
    });
};

export const deleteFromDB = (path: string) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const newEmail = user?.email?.replace(FB_DOT, FB_COMMA);
            remove(ref(db, FB_USERS_URL + newEmail + path));
        } else {
            throw new Error(FB_NO_USER_ERR);
        }
    });
};

export const updateDB = (path: string, data: any) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const newEmail = user?.email?.replace(FB_DOT, FB_COMMA);
            update(ref(db, FB_USERS_URL + newEmail + path), data);
        } else {
            throw new Error(FB_NO_USER_ERR);
        }
    });
};

export const signUp = async (email: string, password: string) => {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        error = err;
    }
    return { result, error };
};

export const signIn = async (email: string, password: string) => {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        error = err;
    }

    return { result, error };
};
