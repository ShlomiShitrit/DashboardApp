import { KeyboardEvent } from "react";
import TextField from "@mui/material/TextField";

import { ReasonCompProps } from "../../Interfaces/interfaces";
import {
    REASON_COMP_PROP,
    REASON_COMP_ID,
    REASON_COMP_NAME,
    REASON_COMP_VAR,
    REASON_COMP_LABEL_TXT,
    REASON_COMP_AUTO_COMP,
} from "@/app/GeneralResources/resources";

function ReasonComp({
    reason = REASON_COMP_PROP,
    reasonHandler = (event) => null,
    submitHandler = () => null,
}: ReasonCompProps) {
    const enterPress = (e: KeyboardEvent<HTMLImageElement>) => {
        if (e.key === "Enter") {
            submitHandler();
        }
    };
    return (
        <TextField
            required
            id={REASON_COMP_ID}
            name={REASON_COMP_NAME}
            label={REASON_COMP_LABEL_TXT}
            fullWidth
            autoComplete={REASON_COMP_AUTO_COMP}
            variant={REASON_COMP_VAR}
            value={reason}
            onChange={reasonHandler}
            onKeyUp={enterPress}
        />
    );
}

export default ReasonComp;
