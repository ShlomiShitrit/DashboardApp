import Button from "@mui/material/Button";

import {
    SIGNIN_BTN_TYPE,
    SIGNIN_BTN_VAR,
    SIGNIN_BTN_TXT_DEFAULT,
} from "@/app/GeneralResources/resources";
import { signInBtnStyle } from "@/app/Styles/styles";
import { SignInBtnProps } from "@/app/Interfaces/interfaces";

function SignInBtn({ text = SIGNIN_BTN_TXT_DEFAULT }: SignInBtnProps) {
    return (
        <Button
            type={SIGNIN_BTN_TYPE}
            fullWidth
            variant={SIGNIN_BTN_VAR}
            sx={signInBtnStyle}
        >
            {text}
        </Button>
    );
}

export default SignInBtn;
