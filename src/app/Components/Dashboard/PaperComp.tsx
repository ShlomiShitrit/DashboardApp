import Paper from "@mui/material/Paper";
import { PaperCompProps } from "../../Interfaces/interfaces";
import { paperCompStyle } from "@/app/Styles/styles";

function PaperComp(props: PaperCompProps) {
    const height = props.orders ? "auto" : 240;
    return (
        <Paper sx={{ ...paperCompStyle, height: height }}>{props.comp}</Paper>
    );
}

export default PaperComp;
