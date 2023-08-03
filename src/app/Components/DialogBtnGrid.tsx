"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import DialogForm from "./DialogForm";

function DialogBtnGrid() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        console.log("Submitted");
        setOpen(false);
    };

    return (
        <Grid item xs={12} md={8} lg={9}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Expanse
            </Button>
            <DialogForm
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </Grid>
    );
}

export default DialogBtnGrid;
