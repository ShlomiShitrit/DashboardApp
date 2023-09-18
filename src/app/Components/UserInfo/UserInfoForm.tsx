import { Fragment, useState } from "react";
import { TextField, Typography, Button, Alert, Grid } from "@mui/material";
import {
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from "firebase/auth";

import ReAuthDialog from "@/app/Components/UserInfo/ReAuthDialog";
import { auth } from "@/app/Firebase/db";

import {
    USER_FORM_EMPTY_STR,
    USER_FORM_ALERT_SEV_ERR,
    USER_FORM_ALERT_SEV_SUC,
    USER_FORM_ALERT_MSG_TRUE,
    USER_FORM_ALERT_MSG_FALSE,
    USER_FORM_VAR_H1,
    USER_FORM_VAR_H2,
    USER_FORM_VAR_H3,
    USER_FORM_VAR_H5,
    USER_FORM_TYP1_TXT,
    USER_FORM_TYP2_TXT,
    USER_FORM_PASS_ID,
    USER_FORM_PASS_LABEL,
    USER_FORM_PASS_VAR,
    USER_FORM_BTN_VAR,
    USER_FORM_BTN_COLOR,
    USER_FORM_BTN_TXT,
} from "@/app/GeneralResources/resources";

import {
    USER_FORM_PASS_LEN,
    USER_FORM_GRID_SPAC,
    USER_FORM_GRID_12,
} from "@/app/GeneralResources/constants";

function UserInfoForm() {
    const [password, setPassword] = useState(USER_FORM_EMPTY_STR);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [reEmail, setReEmail] = useState(USER_FORM_EMPTY_STR);
    const [rePassword, setRePassword] = useState(USER_FORM_EMPTY_STR);
    const [isReError, setIsReError] = useState(false);
    const [open, setOpen] = useState(false);
    const [isReAuth, setIsReAuth] = useState(false);

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const reEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReEmail(event.target.value);
    };

    const rePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(event.target.value);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const openHandler = () => {
        setOpen(true);
    };

    const reAuthSubmitHandler = () => {
        const user = auth.currentUser;
        if (user && !isReAuth) {
            const credential = EmailAuthProvider.credential(
                reEmail,
                rePassword
            );
            reauthenticateWithCredential(user, credential)
                .then(() => {
                    setIsReError(false);
                    setIsReAuth(true);
                    closeHandler();
                })
                .catch(() => {
                    setIsReError(true);
                });
        }
    };

    const changePassword = () => {
        const user = auth.currentUser;
        if (user && password.length >= USER_FORM_PASS_LEN) {
            if (!isReAuth) {
                openHandler();
                return;
            }
            if (isReAuth) {
                updatePassword(user, password)
                    .then(() => {
                        setIsPasswordError(false);
                        setIsReAuth(false);
                        setIsSubmit(true);
                    })
                    .catch(() => {
                        setIsPasswordError(true);
                    });
            }
        } else {
            setIsPasswordError(true);
        }
    };

    const alertSeverity = isPasswordError
        ? USER_FORM_ALERT_SEV_ERR
        : USER_FORM_ALERT_SEV_SUC;
    const alertMessage = isPasswordError
        ? USER_FORM_ALERT_MSG_TRUE
        : USER_FORM_ALERT_MSG_FALSE;
    return (
        <Fragment>
            <ReAuthDialog
                emailHandler={reEmailHandler}
                passwordHandler={rePasswordHandler}
                submitHandler={reAuthSubmitHandler}
                open={open}
                onClose={closeHandler}
                isReError={isReError}
            />
            <Grid container spacing={USER_FORM_GRID_SPAC}>
                <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                    <Typography
                        variant={USER_FORM_VAR_H3}
                        component={USER_FORM_VAR_H1}
                    >
                        {USER_FORM_TYP1_TXT}
                    </Typography>
                </Grid>
                <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                    <Typography
                        variant={USER_FORM_VAR_H5}
                        component={USER_FORM_VAR_H2}
                    >
                        {USER_FORM_TYP2_TXT}
                    </Typography>
                </Grid>
                {isPasswordError && (
                    <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                        <Alert severity={alertSeverity}>{alertMessage}</Alert>
                    </Grid>
                )}
                {isSubmit && (
                    <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                        <Alert severity={alertSeverity}>{alertMessage}</Alert>
                    </Grid>
                )}
                <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                    <TextField
                        fullWidth
                        id={USER_FORM_PASS_ID}
                        label={USER_FORM_PASS_LABEL}
                        variant={USER_FORM_PASS_VAR}
                        onChange={passwordHandler}
                    />
                </Grid>
                <Grid item xs={USER_FORM_GRID_12} sm={USER_FORM_GRID_12}>
                    <Button
                        variant={USER_FORM_BTN_VAR}
                        color={USER_FORM_BTN_COLOR}
                        onClick={changePassword}
                    >
                        {USER_FORM_BTN_TXT}
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default UserInfoForm;
