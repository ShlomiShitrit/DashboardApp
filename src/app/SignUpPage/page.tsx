"use client";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUp, writeToDB } from "@/app/Firebase/firebaseFunc";

import SignInHeader from "../Components/Signing/SignInHeader";
import EmailInput from "../Components/Signing/EmailInput";
import PasswordLabel from "../Components/Signing/PasswordLabel";
import PasswordInput from "../Components/Signing/PasswordInput";
import SignInBtn from "../Components/Signing/SignInBtn";
import NameInput from "../Components/Signing/NameInput";
import { SignUpData } from "@/app/GeneralResources/interfaces";

import {
    SIGNUP_SUBMIT_URL,
    SIGNUP_EMAIL_STATE_DEFAULT,
    SIGNUP_PASS_STATE_DEFAULT,
    SIGNUP_PASS_AGAIN_STATE_DEFAULT,
    SIGNUP_DIV1_CLASS,
    SIGNUP_SIGNIN_HEAD_TXT,
    SIGNUP_DIV2_CLASS,
    SIGNUP_DIV3_CLASS,
    SIGNUP_PASS_LABEL_TXT,
    SIGNUP_PASS_AGAIN_LABEL_TXT,
    SIGNUP_SIGNIN_BTN_TXT,
    SIGNUP_FNAME_STATE_DEFAULT,
    SIGNUP_LNAME_STATE_DEFAULT,
    NAME_INPUT_LABEL_TXT_F,
    NAME_INPUT_LABEL_TXT_L,
    CATEGORIES,
    SIGNUP_USER_URL,
    SIGNUP_DOT,
    SIGNUP_COMMA,
} from "@/app/GeneralResources/resources";

import { SIGNUP_BUDGETS_DEFAULT } from "@/app/GeneralResources/constants";

function Signup() {
    const [email, setEmail] = useState(SIGNUP_EMAIL_STATE_DEFAULT);
    const [password, setPassword] = useState(SIGNUP_PASS_STATE_DEFAULT);
    const [passwordAgain, setPasswordAgain] = useState(
        SIGNUP_PASS_AGAIN_STATE_DEFAULT
    );
    const [fname, setFname] = useState(SIGNUP_FNAME_STATE_DEFAULT);
    const [lname, setLname] = useState(SIGNUP_LNAME_STATE_DEFAULT);

    const router = useRouter();

    const signUpHandler = async () => {
        const { error } = await signUp(email, password);
        if (error) {
            throw new Error(error.message);
        }

        const dataToDB: SignUpData = {
            budgets: SIGNUP_BUDGETS_DEFAULT,
            categories: CATEGORIES,
            expanse: {},
            userInfo: {
                email: email,
                firstName: fname,
                lastName: lname,
            },
            names: [`${fname} ${lname}`],
        };

        writeToDB(
            `${SIGNUP_USER_URL}${email.replace(SIGNUP_DOT, SIGNUP_COMMA)}`,
            dataToDB
        );

        router.push(SIGNUP_SUBMIT_URL);
    };

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const passwordAgainHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPasswordAgain(event.target.value);
    };

    const fnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFname(event.target.value);
    };

    const lnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLname(event.target.value);
    };

    const isDisable =
        !fname ||
        !lname ||
        !email ||
        !password ||
        !passwordAgain ||
        password !== passwordAgain;

    return (
        <Fragment>
            <div className={SIGNUP_DIV1_CLASS}>
                <SignInHeader text={SIGNUP_SIGNIN_HEAD_TXT} />

                <div className={SIGNUP_DIV2_CLASS}>
                    <div className={SIGNUP_DIV3_CLASS}>
                        <NameInput
                            nameHandler={fnameHandler}
                            text={NAME_INPUT_LABEL_TXT_F}
                        />
                        <NameInput
                            nameHandler={lnameHandler}
                            text={NAME_INPUT_LABEL_TXT_L}
                        />
                        <EmailInput emailHandler={emailHandler} />

                        <div>
                            <PasswordLabel
                                forgetPassword={false}
                                forgetPasswordRouteHandler={() => null}
                                text={SIGNUP_PASS_LABEL_TXT}
                            />
                            <PasswordInput
                                passwordHandler={passwordHandler}
                                submitHandler={signUpHandler}
                                isKeyPressWork={false}
                                isDisable={isDisable}
                            />
                        </div>
                        <div>
                            <PasswordLabel
                                forgetPassword={false}
                                forgetPasswordRouteHandler={() => null}
                                text={SIGNUP_PASS_AGAIN_LABEL_TXT}
                            />
                            <PasswordInput
                                passwordHandler={passwordAgainHandler}
                                submitHandler={signUpHandler}
                                isKeyPressWork={true}
                                isDisable={isDisable}
                            />
                        </div>

                        <SignInBtn
                            signInHandler={signUpHandler}
                            disabled={isDisable}
                            text={SIGNUP_SIGNIN_BTN_TXT}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Signup;
