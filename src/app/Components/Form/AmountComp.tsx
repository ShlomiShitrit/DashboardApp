import React from "react";
import TextField from "@mui/material/TextField";

import { AmountCompProps } from "../../Interfaces/interfaces";

function AmountComp({ amountHandler = (event) => null }: AmountCompProps) {
    return (
        <TextField
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            required
            id="amount"
            name="amount"
            label="Amount"
            fullWidth
            autoComplete="amount"
            variant="standard"
            onChange={amountHandler}
        />
    );
}

export default AmountComp;
