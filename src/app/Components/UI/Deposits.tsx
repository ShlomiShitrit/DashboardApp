import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

import { DepositsProps } from "../../Interfaces/interfaces";

function Deposits({ budgetDialogHandler = () => null }: DepositsProps) {
    const currentDate = dayjs().format("DD/MM/YYYY");
    return (
        <Fragment>
            <Typography sx={{ margin: "10px" }} variant="h4">
                Welcome Libi!
            </Typography>
            <Typography
                sx={{ mt: "50px", flex: 1 }}
                variant="h5"
                color="text.secondary"
            >
                Date: {currentDate}
            </Typography>
            <Button
                onClick={budgetDialogHandler}
                color="success"
                variant="contained"
                sx={{ mt: "50px", flex: 1 }}
            >
                Set Budget
            </Button>
        </Fragment>
    );
}

export default Deposits;
