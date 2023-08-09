"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import DialogForm from "./DialogForm";
import {
    DIALOG_BTN_GRID_BTN_VAR,
    DIALOG_BTN_GRID_BTN_COLOR,
    DIALOG_BTN_GRID_BTN_TXT,
} from "@/app/GeneralResources/resources";

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
            <Button
                variant={DIALOG_BTN_GRID_BTN_VAR}
                color={DIALOG_BTN_GRID_BTN_COLOR}
                onClick={handleOpen}
            >
                {DIALOG_BTN_GRID_BTN_TXT}
            </Button>
            <DialogForm open={open} handleClose={handleClose} />
        </Grid>
    );
}

export default DialogBtnGrid;
