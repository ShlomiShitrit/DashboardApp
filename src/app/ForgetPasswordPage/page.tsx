"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/Firebase/db";
import { sendPasswordResetEmail } from "firebase/auth";

import SignInHeader from "@/app/Components/Signing/SignInHeader";
import EmailInput from "@/app/Components/Signing/EmailInput";
import SignInBtn from "@/app/Components/Signing/SignInBtn";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const router = useRouter();

    const resetEmailHandler = () => {
        sendPasswordResetEmail(auth, email);
        router.push("/");
    };

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const isDisable = !email;

    return (
        <Fragment>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <SignInHeader text={"Forgot Password"} />

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <EmailInput emailHandler={emailHandler} />

                        <SignInBtn
                            signInHandler={resetEmailHandler}
                            disabled={isDisable}
                            text={"Send Forgot Password Email"}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ForgotPassword;
