import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


import {
    SIGNIN_FORM_CONTROL_VALUE,
    SIGNIN_FORM_CONTROL_COLOR,
    SIGNIN_FORM_LABEL,
} from "@/app/GeneralResources/resources";

function SignInFormCtrlLabel() {
    return (
        <FormControlLabel
        control={
            <Checkbox
                value={SIGNIN_FORM_CONTROL_VALUE}
                color={SIGNIN_FORM_CONTROL_COLOR}
            />
        }
        label={SIGNIN_FORM_LABEL}
    />
    );
}

export default SignInFormCtrlLabel;
