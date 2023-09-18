import {
    TextField,
    Button,
    Alert,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

import { ReAuthDialogProps } from "@/app/GeneralResources/interfaces";

import {
    REAUTH_DIALOG_TITLE,
    REAUTH_DIALOG_VAR,
    REAUTH_TYP_COMP,
    REAUTH_TYP_TXT,
    REAUTH_ALERT_SEV,
    REAUTH_ALERT_TXT,
    REAUTH_EMAIL_ID,
    REAUTH_EMAIL_LABEL,
    REAUTH_PASS_ID,
    REAUTH_PASS_LABEL,
    REAUTH_TXT_FIELD_VAR,
    REAUTH_BTN_VAR,
    REAUTH_BTN_COLOR,
    REAUTH_BTN_TXT,
} from "@/app/GeneralResources/resources";

function ReAuthDialog({
    emailHandler = () => null,
    passwordHandler = () => null,
    submitHandler = () => null,
    open = false,
    onClose = () => null,
    isReError = false,
}: ReAuthDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle variant={REAUTH_DIALOG_VAR}>
                {REAUTH_DIALOG_TITLE}
            </DialogTitle>
            <DialogContent>
                <Typography component={REAUTH_TYP_COMP}>
                    {REAUTH_TYP_TXT}
                </Typography>
                <br />
                {isReError && (
                    <Alert severity={REAUTH_ALERT_SEV}>
                        {REAUTH_ALERT_TXT}
                    </Alert>
                )}
                <br />
                <TextField
                    fullWidth
                    id={REAUTH_EMAIL_ID}
                    label={REAUTH_EMAIL_LABEL}
                    variant={REAUTH_TXT_FIELD_VAR}
                    onChange={emailHandler}
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    id={REAUTH_PASS_ID}
                    label={REAUTH_PASS_LABEL}
                    variant={REAUTH_TXT_FIELD_VAR}
                    onChange={passwordHandler}
                />
                <br />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={submitHandler}
                    variant={REAUTH_BTN_VAR}
                    color={REAUTH_BTN_COLOR}
                >
                    {REAUTH_BTN_TXT}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ReAuthDialog;
