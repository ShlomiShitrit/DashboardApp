"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUp } from "@/app/Firebase/firebaseFunc";

import SignInHeader from "../Components/Signing/SignInHeader";
import EmailInput from "../Components/Signing/EmailInput";
import PasswordLabel from "../Components/Signing/PasswordLabel";
import PasswordInput from "../Components/Signing/PasswordInput";
import SignInBtn from "../Components/Signing/SignInBtn";

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
} from "@/app/GeneralResources/resources";

function Signup() {
    const [email, setEmail] = useState(SIGNUP_EMAIL_STATE_DEFAULT);
    const [password, setPassword] = useState(SIGNUP_PASS_STATE_DEFAULT);
    const [passwordAgain, setPasswordAgain] = useState(
        SIGNUP_PASS_AGAIN_STATE_DEFAULT
    );

    const router = useRouter();

    const signUpHandler = async () => {
        const { error } = await signUp(email, password);
        if (error) {
            throw new Error(error.message);
        }

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

    const isDisable =
        !email || !password || !passwordAgain || password !== passwordAgain;

    return (
        <>
            <div className={SIGNUP_DIV1_CLASS}>
                <SignInHeader text={SIGNUP_SIGNIN_HEAD_TXT} />

                <div className={SIGNUP_DIV2_CLASS}>
                    <div className={SIGNUP_DIV3_CLASS}>
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
        </>
    );
}

export default Signup;
