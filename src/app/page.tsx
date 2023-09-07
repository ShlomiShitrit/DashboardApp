"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import SignInHeader from "@/app/Components/Signing/SignInHeader";
import EmailInput from "@/app/Components/Signing/EmailInput";
import PasswordLabel from "@/app/Components/Signing/PasswordLabel";
import PasswordInput from "@/app/Components/Signing/PasswordInput";
import SignInBtn from "@/app/Components/Signing/SignInBtn";
import NotMemberBtn from "@/app/Components/Signing/NotMemberBtn";

import { signIn } from "@/app/Firebase/firebaseFunc";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const forgetPasswordRouteHandler = () => {
        router.push("/ForgetPasswordPage");
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const signInHandler = async () => {
        const { error } = await signIn(email, password);
        if (error) {
            throw new Error(error.message);
        }

        router.push("/HomePage");
    };

    const signUpRouteHandler = () => {
        router.push("/SignUpPage");
    };

    const isDisable = !email || !password;
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <SignInHeader text={"Sign in to your account"} />

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <EmailInput emailHandler={emailHandler} />

                        <div>
                            <PasswordLabel
                                forgetPassword={true}
                                forgetPasswordRouteHandler={
                                    forgetPasswordRouteHandler
                                }
                                text={"Password"}
                            />
                            <PasswordInput passwordHandler={passwordHandler} />
                        </div>
                        <SignInBtn
                            signInHandler={signInHandler}
                            disabled={isDisable}
                            text={"Sign in"}
                        />
                    </div>
                    <NotMemberBtn signUpRouteHandler={signUpRouteHandler} />
                </div>
            </div>
        </>
    );
}
