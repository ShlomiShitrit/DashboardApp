"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail } from "firebase/auth";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";

import SignInTyp from "@/app/Components/Signing//SignInTyp";
import EmailTextField from "@/app/Components/Signing/EmailTextField";
import SignInBtn from "@/app/Components/Signing//SignInBtn";
import { auth } from "@/app/Firebase/db";

import {
    darkTheme,
    forgetPassPageBox1Style,
    forgetPassPageBox2Style,
    forgetPassAvatarStyle,
} from "@/app/Styles/styles";

import {
    FORGET_PASS_TYP_TXT,
    FORGET_PASS_BOX2_COMP_FORM,
    FORGET_PASS_BTN_TXT,
    FORGET_PASS_SUBMIT_URL,
    FORGET_PASS_EMAIL,
} from "@/app/GeneralResources/resources";

function ForgetPasswordPage() {
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        sendPasswordResetEmail(auth, data.get(FORGET_PASS_EMAIL) as string);
        router.push(FORGET_PASS_SUBMIT_URL);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={forgetPassPageBox1Style}>
                <Avatar sx={forgetPassPageBox2Style}>
                    <LockOutlinedIcon />
                </Avatar>
                <SignInTyp text={FORGET_PASS_TYP_TXT} />
                <Box
                    component={FORGET_PASS_BOX2_COMP_FORM}
                    noValidate
                    onSubmit={handleSubmit}
                    sx={forgetPassAvatarStyle}
                >
                    <EmailTextField />
                    <SignInBtn text={FORGET_PASS_BTN_TXT} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ForgetPasswordPage;
