import Paper from "@mui/material/Paper";
import { PaperCompProps } from "../../Interfaces/interfaces";

function PaperComp(props: PaperCompProps) {
    const height = props.orders ? "auto" : 240;
    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: height,
            }}
        >
            {props.comp}
        </Paper>
    );
}

export default PaperComp;
