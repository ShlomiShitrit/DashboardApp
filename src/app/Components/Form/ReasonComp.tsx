import TextField from "@mui/material/TextField";

import { ReasonCompProps } from "../../Interfaces/interfaces";

function ReasonComp({
    reason = "",
    reasonHandler = (event) => null,
}: ReasonCompProps) {
    return (
        <TextField
            id="reason"
            name="reason"
            label="Reason"
            fullWidth
            autoComplete="reason"
            variant="standard"
            value={reason}
            onChange={reasonHandler}
        />
    );
}

export default ReasonComp;
