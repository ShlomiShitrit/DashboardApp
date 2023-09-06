import Typography from "@mui/material/Typography";

import { SignInTypProps } from "@/app/Interfaces/interfaces";

import {
    SIGNIN_TYP_COMP_H1,
    SIGNIN_TYP_VAR_H5,
    SIGNIN_TYP_TXT,
    SIGNIN_TYP_TXT_DEFAULT,
} from "@/app/GeneralResources/resources";

function SignInTyp({ text = SIGNIN_TYP_TXT_DEFAULT }: SignInTypProps) {
    return (
        <Typography component={SIGNIN_TYP_COMP_H1} variant={SIGNIN_TYP_VAR_H5}>
            {text}
        </Typography>
    );
}

export default SignInTyp;
