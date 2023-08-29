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

import {
    DIALOG_BTN_GRID_SIZE_12,
    DIALOG_BTN_GRID_SIZE_8,
    DIALOG_BTN_GRID_SIZE_9,
} from "@/app/GeneralResources/constants";

function DialogBtnGrid() {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Grid
            item
            xs={DIALOG_BTN_GRID_SIZE_12}
            md={DIALOG_BTN_GRID_SIZE_8}
            lg={DIALOG_BTN_GRID_SIZE_9}
        >
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
