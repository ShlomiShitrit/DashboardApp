import Paper from "@mui/material/Paper";
import { PaperCompProps } from "../../Interfaces/interfaces";
import { paperCompStyle } from "@/app/Styles/styles";

function PaperComp({ comp = <div />, size = "auto" }: PaperCompProps) {
    let height: string | number;
    switch (size) {
        case "auto":
            height = "100%";
            break;
        case "large":
            height = 500;
            break;
        case "medium":
            height = 300;
            break;
        default:
            height = "auto";
            break;
    }

    return <Paper sx={{ ...paperCompStyle, height: height }}>{comp}</Paper>;
}

export default PaperComp;
