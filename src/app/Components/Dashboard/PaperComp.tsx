import Paper from "@mui/material/Paper";
import { PaperCompProps } from "../../Interfaces/interfaces";
import { paperCompStyle } from "@/app/Styles/styles";

function PaperComp({comp = <div />, orders = true}: PaperCompProps) {
    const height = orders ? "auto" : 240;
    return (
        <Paper sx={{ ...paperCompStyle, height: height }}>{comp}</Paper>
    );
}

export default PaperComp;
