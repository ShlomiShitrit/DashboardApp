"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, MouseEventHandler } from "react";
import { signUp } from "@/app/Firebase/firebaseFunc";

import SignInHeader from "../Components/Signing/SignInHeader";
import EmailInput from "../Components/Signing/EmailInput";
import PasswordLabel from "../Components/Signing/PasswordLabel";
import PasswordInput from "../Components/Signing/PasswordInput";
import SignInBtn from "../Components/Signing/SignInBtn";

import {
    SIGNUP_SUBMIT_EMAIL,
    SIGNUP_SUBMIT_PASSSWORD,
    SIGNUP_SUBMIT_URL,
} from "@/app/GeneralResources/resources";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <SignInHeader text={"Sign Up"} />

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <EmailInput emailHandler={emailHandler} />

                        <div>
                            <PasswordLabel
                                forgetPassword={false}
                                forgetPasswordRouteHandler={() => null}
                                text={"Password"}
                            />
                            <PasswordInput passwordHandler={passwordHandler} />
                        </div>
                        <div>
                            <PasswordLabel
                                forgetPassword={false}
                                forgetPasswordRouteHandler={() => null}
                                text={"Password Again"}
                            />
                            <PasswordInput
                                passwordHandler={passwordAgainHandler}
                            />
                        </div>

                        <SignInBtn
                            signInHandler={signUpHandler}
                            disabled={isDisable}
                            text={"Sign Up"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
