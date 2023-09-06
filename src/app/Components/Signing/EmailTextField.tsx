import TextField from "@mui/material/TextField";

import {
    SIGNIN_TXT_FIELD_EMAIL_M,
    SIGNIN_TXT_FIELD_EMAIL_LABEL,
    SIGNIN_TXT_FIELD_EMAIL_NAME,
    SIGNIN_TXT_FIELD_EMAIL_AUTO_COMPLETE,
} from "@/app/GeneralResources/resources";

function EmailTextField() {
    return (
        <TextField
            margin={SIGNIN_TXT_FIELD_EMAIL_M}
            required
            fullWidth
            label={SIGNIN_TXT_FIELD_EMAIL_LABEL}
            name={SIGNIN_TXT_FIELD_EMAIL_NAME}
            autoComplete={SIGNIN_TXT_FIELD_EMAIL_AUTO_COMPLETE}
            autoFocus
        />
    );
}

export default EmailTextField;
