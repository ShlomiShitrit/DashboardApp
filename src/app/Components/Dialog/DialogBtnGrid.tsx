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

    return (
        <Grid item xs={12} md={8} lg={9}>
            <Button variant="contained" color="success" onClick={handleOpen}>
                Add Expanse
            </Button>
            <DialogForm
                open={open}
                handleClose={handleClose}
            />
        </Grid>
    );
}

export default DialogBtnGrid;
