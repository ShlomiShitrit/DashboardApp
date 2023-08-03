import TextField from "@mui/material/TextField";

import { ReasonCompProps } from "../../Interfaces/interfaces";

function ReasonComp(props: ReasonCompProps) {
    return (
        <TextField
            id="reason"
            name="reason"
            label="Reason"
            fullWidth
            autoComplete="reason"
            variant="standard"
            value={props.reason}
            onChange={props.reasonHandler}
        />
    );
}

export default ReasonComp;
