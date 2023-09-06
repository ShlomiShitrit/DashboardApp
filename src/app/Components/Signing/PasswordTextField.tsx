import TextField from "@mui/material/TextField";

import {
    SIGNIN_TXT_FIELD_PASS_M,
    SIGNIN_TXT_FIELD_PASS_LABEL,
    SIGNIN_TXT_FIELD_PASS_NAME,
    SIGNIN_TXT_FIELD_PASS_AUTO_COMPLETE,
    SIGNIN_TXT_FIELD_PASS_TYPE,
} from "@/app/GeneralResources/resources";

function PasswordTextField() {
    return (
        <TextField
            margin={SIGNIN_TXT_FIELD_PASS_M}
            required
            fullWidth
            name={SIGNIN_TXT_FIELD_PASS_NAME}
            label={SIGNIN_TXT_FIELD_PASS_LABEL}
            type={SIGNIN_TXT_FIELD_PASS_TYPE}
            autoComplete={SIGNIN_TXT_FIELD_PASS_AUTO_COMPLETE}
        />
    );
}

export default PasswordTextField;
