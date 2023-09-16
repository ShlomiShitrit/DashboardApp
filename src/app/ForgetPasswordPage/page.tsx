"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/Firebase/db";
import { sendPasswordResetEmail } from "firebase/auth";
import Alert from "@mui/material/Alert";

import SignInHeader from "@/app/Components/Signing/SignInHeader";
import EmailInput from "@/app/Components/Signing/EmailInput";
import SignInBtn from "@/app/Components/Signing/SignInBtn";

import {
    FORGET_PASS_EMAIL_STATE_DEFAULT,
    FORGET_PASS_SIGNIN_ROUTE,
    FORGET_PASS_DIV1_CLASS,
    FORGET_PASS_SIGNIN_HEADER_TXT,
    FORGET_PASS_DIV2_CLASS,
    FORGET_PASS_DIV3_CLASS,
    FORGET_PASS_SIGNIN_BTN_TXT,
    FORGET_PASS_MSG_STATE_DEFAULT,
    FORGET_EMAIL_ERROR_CODE,
    FORGET_USER_ERROR_CODE,
    FORGET_EMAIL_ERROR_MSG,
    FORGET_USER_ERROR_MSG,
    FORGET_GENERAL_ERROR_MSG,
    FORGET_ALERT_SEV,
} from "@/app/GeneralResources/resources";

function ForgotPassword() {
    const [email, setEmail] = useState(FORGET_PASS_EMAIL_STATE_DEFAULT);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(FORGET_PASS_MSG_STATE_DEFAULT);

    const router = useRouter();

    const resetEmailHandler = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            router.push(FORGET_PASS_SIGNIN_ROUTE);
        } catch (error: any) {
            setIsError(true);
            switch (error.code) {
                case FORGET_EMAIL_ERROR_CODE:
                    setErrorMsg(FORGET_EMAIL_ERROR_MSG);
                    break;
                case FORGET_USER_ERROR_CODE:
                    setErrorMsg(FORGET_USER_ERROR_MSG);
                    break;
                default:
                    setErrorMsg(FORGET_GENERAL_ERROR_MSG);
                    break;
            }
        }
    };

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const isDisable = !email;

    return (
        <Fragment>
            <div className={FORGET_PASS_DIV1_CLASS}>
                <SignInHeader text={FORGET_PASS_SIGNIN_HEADER_TXT} />

                <div className={FORGET_PASS_DIV3_CLASS}>
                    <div className={FORGET_PASS_DIV2_CLASS}>
                        <EmailInput emailHandler={emailHandler} />

                        <SignInBtn
                            signInHandler={resetEmailHandler}
                            disabled={isDisable}
                            text={FORGET_PASS_SIGNIN_BTN_TXT}
                        />
                        <br />
                        {isError && (
                            <Alert severity={FORGET_ALERT_SEV}>
                                {errorMsg}
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ForgotPassword;
