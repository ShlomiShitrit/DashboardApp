"use client";
import { FormEvent } from "react";
import { useRouter  } from "next/navigation";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";

import EmailTextField from "@/app/Components/Signing/EmailTextField";
import PasswordTextField from "@/app/Components/Signing//PasswordTextField";
import SignInBtn from "@/app/Components/Signing//SignInBtn";
import SignInLink from "@/app/Components/Signing//SignInLink";
import SignInTyp from "@/app/Components/Signing//SignInTyp";
import SignInFormCtrlLabel from "@/app/Components/Signing//SignInFormCtrlLabel";

import {
    darkTheme,
    signInPageBox1Style,
    signInPageBox2Style,
    signInAvatarStyle,
} from "@/app/Styles/styles";

import {
    SIGNIN_TYP_TXT,
    SIGNIN_BOX2_COMP_FORM,
    SIGNIN_LINK1_HREF,
    SIGNIN_LINK1_TXT,
    SIGNIN_LINK2_HREF,
    SIGNIN_LINK2_TXT,
    SIGNIN_BTN_TXT,
} from "@/app/GeneralResources/resources";
function SignIn() {
    const router = useRouter();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        router.push("/HomePage");
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={signInPageBox1Style}>
                <Avatar sx={signInAvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>
                <SignInTyp text={SIGNIN_TYP_TXT} />

                <Box
                    component={SIGNIN_BOX2_COMP_FORM}
                    onSubmit={handleSubmit}
                    noValidate
                    sx={signInPageBox2Style}
                >
                    <EmailTextField />
                    <PasswordTextField />
                    <SignInFormCtrlLabel />
                    <SignInBtn text={SIGNIN_BTN_TXT} />

                    <Grid container>
                        <Grid item xs>
                            <SignInLink
                                href={SIGNIN_LINK1_HREF}
                                text={SIGNIN_LINK1_TXT}
                            />
                        </Grid>
                        <Grid item>
                            <SignInLink
                                href={SIGNIN_LINK2_HREF}
                                text={SIGNIN_LINK2_TXT}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default SignIn;
