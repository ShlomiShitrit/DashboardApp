import { Button } from "@mui/material";

import { depositsBtnStyle } from "@/app/GeneralResources/styles";
import {
    DIALOGS_BTN_COLOR,
    DIALOGS_BTN_VAR,
    DIALOGS_BTN_EMPTY_STR,
} from "@/app/GeneralResources/resources";

import { DialogBtnProps } from "@/app/GeneralResources/interfaces";

function DialogBtn({
    dialogHandler = () => null,
    text = DIALOGS_BTN_EMPTY_STR,
}: DialogBtnProps) {
    return (
        <Button
            onClick={dialogHandler}
            color={DIALOGS_BTN_COLOR}
            variant={DIALOGS_BTN_VAR}
            sx={depositsBtnStyle}
        >
            {text}
        </Button>
    );
}

export default DialogBtn;
