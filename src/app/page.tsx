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
import {
    SIGNIN_EMAIL_STATE_DEFAULT,
    SIGNIN_PASS_STATE_DEFAULT,
    SIGNIN_FORGET_PASS_ROUTE,
    SIGNIN_HOME_PAGE_ROUTE,
    SIGNIN_SIGNUP_ROUTE,
    SIGNIN_DIV1_CLASS,
    SIGNIN_SIGNIN_HEAD_TXT,
    SIGNIN_DIV2_CLASS,
    SIGNIN_DIV3_CLASS,
    SIGNIN_PASS_LABEL_TXT,
    SIGNIN_SIGNIN_BTN_TXT,
} from "@/app/GeneralResources/resources";

import { SIGNIN_PASS_LEN } from "@/app/GeneralResources/constants";

export default function Signin() {
    const [email, setEmail] = useState(SIGNIN_EMAIL_STATE_DEFAULT);
    const [password, setPassword] = useState(SIGNIN_PASS_STATE_DEFAULT);

    const router = useRouter();

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const forgetPasswordRouteHandler = () => {
        router.push(SIGNIN_FORGET_PASS_ROUTE);
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const signInHandler = async () => {
        const { error } = await signIn(email, password);
        if (error) {
            throw new Error(error.message);
        }

        router.push(SIGNIN_HOME_PAGE_ROUTE);
    };

    const signUpRouteHandler = () => {
        router.push(SIGNIN_SIGNUP_ROUTE);
    };

    const isDisable = !email || !password || password.length < SIGNIN_PASS_LEN;
    return (
        <>
            <div className={SIGNIN_DIV1_CLASS}>
                <SignInHeader text={SIGNIN_SIGNIN_HEAD_TXT} />

                <div className={SIGNIN_DIV2_CLASS}>
                    <div className={SIGNIN_DIV3_CLASS}>
                        <EmailInput emailHandler={emailHandler} />

                        <div>
                            <PasswordLabel
                                forgetPassword={true}
                                forgetPasswordRouteHandler={
                                    forgetPasswordRouteHandler
                                }
                                text={SIGNIN_PASS_LABEL_TXT}
                            />
                            <PasswordInput
                                passwordHandler={passwordHandler}
                                submitHandler={signInHandler}
                                isKeyPressWork={true}
                                isDisable={isDisable}
                            />
                        </div>
                        <SignInBtn
                            signInHandler={signInHandler}
                            disabled={isDisable}
                            text={SIGNIN_SIGNIN_BTN_TXT}
                        />
                    </div>
                    <NotMemberBtn signUpRouteHandler={signUpRouteHandler} />
                </div>
            </div>
        </>
    );
}
