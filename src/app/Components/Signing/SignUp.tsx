"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";

import SignInTyp from "@/app/Components/Signing//SignInTyp";
import FirstNameTextField from "@/app/Components/Signing//FirstNameTextField";
import LastNameTextField from "@/app/Components/Signing//LastNameTextField";
import PasswordTextField from "@/app/Components/Signing//PasswordTextField";
import EmailTextField from "@/app/Components/Signing/EmailTextField";
import SignInBtn from "@/app/Components/Signing//SignInBtn";
import SignInLink from "@/app/Components/Signing//SignInLink";

import { signUp } from "@/app/Firebase/firebaseFunc";

import {
    darkTheme,
    signInPageBox1Style,
    signInPageBox2Style,
    signInAvatarStyle,
} from "@/app/Styles/styles";

import {
    SIGNUP_TYP_TXT,
    SIGNUP_BOX2_COMP_FORM,
    SIGNUP_BTN_TXT,
    SIGNUP_GRID_CONT_JC,
    SIGNUP_LINK_TXT,
    SIGNUP_LINK_HREF,
    SIGNUP_SUBMIT_URL,
    SIGNUP_SUBMIT_EMAIL,
    SIGNUP_SUBMIT_PASSSWORD,
} from "@/app/GeneralResources/resources";

import {
    SIGNUP_GRID_SIZE_12,
    SIGNUP_GRID_SIZE_6,
    SIGNUP_GRID_CONT_SPACING_2,
    SIGNUP_GRID_INDEX_0,
    SIGNUP_GRID_INDEX_1,
} from "@/app/GeneralResources/constants";

function SignUp() {
    const router = useRouter();

    const gridItems = [
        <FirstNameTextField />,
        <LastNameTextField />,
        <EmailTextField />,
        <PasswordTextField />,
    ];

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const { error } = await signUp(
            data.get(SIGNUP_SUBMIT_EMAIL) as string,
            data.get(SIGNUP_SUBMIT_PASSSWORD) as string
        );
        if (error) {
            throw new Error(error.message);
        }

        router.push(SIGNUP_SUBMIT_URL);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={signInPageBox1Style}>
                <Avatar sx={signInAvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>
                <SignInTyp text={SIGNUP_TYP_TXT} />
                <Box
                    component={SIGNUP_BOX2_COMP_FORM}
                    noValidate
                    onSubmit={handleSubmit}
                    sx={signInPageBox2Style}
                >
                    <Grid container spacing={SIGNUP_GRID_CONT_SPACING_2}>
                        {gridItems.map((item, index) => (
                            <Grid
                                item
                                xs={SIGNUP_GRID_SIZE_12}
                                sm={
                                    index === SIGNUP_GRID_INDEX_0 ||
                                    index === SIGNUP_GRID_INDEX_1
                                        ? SIGNUP_GRID_SIZE_6
                                        : false
                                }
                                key={index}
                            >
                                {item}
                            </Grid>
                        ))}
                    </Grid>
                    <SignInBtn text={SIGNUP_BTN_TXT} />
                    <Grid container justifyContent={SIGNUP_GRID_CONT_JC}>
                        <Grid item>
                            <SignInLink
                                text={SIGNUP_LINK_TXT}
                                href={SIGNUP_LINK_HREF}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default SignUp;
