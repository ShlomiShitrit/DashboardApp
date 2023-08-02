import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function Form() {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="expanseName"
                        name="expanseName"
                        label="Expanse Name"
                        fullWidth
                        autoComplete="expanse-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="lastName"
                        label="Name"
                        fullWidth
                        autoComplete="first-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="amount"
                        name="amount"
                        label="Amount"
                        fullWidth
                        autoComplete="amount"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="reason"
                        name="reason"
                        label="Reason"
                        fullWidth
                        autoComplete="reason"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="month"
                        name="month"
                        label="Month"
                        fullWidth
                        autoComplete="month"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Form;
