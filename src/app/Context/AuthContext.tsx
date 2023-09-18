import React, { useEffect, useState, createContext } from "react";
import { auth } from "@/app/Firebase/db";
import { User, onAuthStateChanged } from "firebase/auth";
import {
    ContextProps,
    AuthProviderProps,
} from "@/app/GeneralResources/interfaces";

export const AuthContext = createContext<ContextProps>({ user: undefined });

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, setUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
