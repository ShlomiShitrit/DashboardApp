"use client";
import { useRouter } from "next/navigation";
import React, { useState, Fragment } from "react";
import Alert from "@mui/material/Alert";

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
    SIGNIN_ERROR_INVALID_EMAIL,
    SIGNIN_ERROR_WRONG_PASS,
    SIGNIN_ERROR_USER_NOT_FOUND,
    SIGNIN_ERROR_ALERT_SEV,
    SIGNIN_EMAIL_ALERT_TXT,
    SIGNIN_USER_ALERT_TXT,
    SIGNIN_PASS_ALERT_TXT,
    SIGNIN_ERROR_MSG_PROP_DEFAULT,
} from "@/app/GeneralResources/resources";

export default function Signin() {
    const [email, setEmail] = useState(SIGNIN_EMAIL_STATE_DEFAULT);
    const [password, setPassword] = useState(SIGNIN_PASS_STATE_DEFAULT);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(SIGNIN_ERROR_MSG_PROP_DEFAULT);

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
        try {
            const { error } = await signIn(email, password);
            if (error) {
                throw error;
            }
            router.push(SIGNIN_HOME_PAGE_ROUTE);
        } catch (error: any) {
            setIsError(true);
            switch (error.code) {
                case SIGNIN_ERROR_INVALID_EMAIL:
                    setErrorMsg(SIGNIN_EMAIL_ALERT_TXT);
                    break;
                case SIGNIN_ERROR_WRONG_PASS:
                    setErrorMsg(SIGNIN_PASS_ALERT_TXT);
                    break;
                case SIGNIN_ERROR_USER_NOT_FOUND:
                    setErrorMsg(SIGNIN_USER_ALERT_TXT);
                    break;
            }
        }
    };

    const signUpRouteHandler = () => {
        router.push(SIGNIN_SIGNUP_ROUTE);
    };

    const isDisable = !email || !password;
    return (
        <Fragment>
            <div className={SIGNIN_DIV1_CLASS}>
                <SignInHeader text={SIGNIN_SIGNIN_HEAD_TXT} />

                <div className={SIGNIN_DIV2_CLASS}>
                    <div className={SIGNIN_DIV3_CLASS}>
                        {isError && (
                            <Alert severity={SIGNIN_ERROR_ALERT_SEV}>
                                {errorMsg}
                            </Alert>
                        )}
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
        </Fragment>
    );
}
