import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import Form from "./Form";

interface DialogFormProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
}

function DialogForm(props: DialogFormProps) {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Add Exapanse</DialogTitle>
            <DialogContent>
                <Form />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogForm;
