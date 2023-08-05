import { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { CategoryAmountProps } from "@/app/Interfaces/interfaces";

function CategoryAmount({
    category = "",
    amount = 0,
    amountHandler = () => null,
}: CategoryAmountProps) {
    return (
        <Fragment>
            <Typography variant="h6">{category}</Typography>
            <TextField
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                required
                id="amount"
                name="amount"
                fullWidth
                autoComplete="amount"
                variant="standard"
                value={amount === 0 ? "" : amount}
                onChange={amountHandler}
            />
        </Fragment>
    );
}

export default CategoryAmount;
