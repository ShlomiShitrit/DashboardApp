import TextField from "@mui/material/TextField";

import {
    SIGNUP_TXT_FIELD_LNAME_LABEL,
    SIGNUP_TXT_FIELD_LNAME_NAME,
    SIGNUP_TXT_FIELD_LNAMEL_AUTO_COMPLETE,
} from "@/app/GeneralResources/resources";

function LastNameTextField() {
    return (
        <TextField
            required
            fullWidth
            label={SIGNUP_TXT_FIELD_LNAME_LABEL}
            name={SIGNUP_TXT_FIELD_LNAME_NAME}
            autoComplete={SIGNUP_TXT_FIELD_LNAMEL_AUTO_COMPLETE}
        />
    );
}

export default LastNameTextField;
