import TextField from "@mui/material/TextField";

import {
    SIGNUP_TXT_FIELD_FNAME_LABEL,
    SIGNUP_TXT_FIELD_FNAME_NAME,
    SIGNUP_TXT_FIELD_FNAMEL_AUTO_COMPLETE,
} from "@/app/GeneralResources/resources";

function FirstNameTextField() {
    return (
        <TextField
            autoComplete={SIGNUP_TXT_FIELD_FNAMEL_AUTO_COMPLETE}
            name={SIGNUP_TXT_FIELD_FNAME_NAME}
            required
            fullWidth
            label={SIGNUP_TXT_FIELD_FNAME_LABEL}
            autoFocus
        />
    );
}

export default FirstNameTextField;
