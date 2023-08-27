import Paper from "@mui/material/Paper";
import { PaperCompProps } from "../../Interfaces/interfaces";
import { paperCompStyle } from "@/app/Styles/styles";
import {
    PAPER_COMP_DEFUALT_SIZE,
    PAPER_COMP_SIZE_MED,
    PAPER_COMP_SIZE_AUTO,
    PAPER_COMP_SIZE_LG,
    PAPER_COMP_100_HEIGHT,
} from "@/app/GeneralResources/resources";

import {
    PAPER_COMP_HEIGHT_600,
    PAPER_COMP_HEIGHT_300,
} from "@/app/GeneralResources/constants";

function PaperComp({
    comp = <div />,
    size = PAPER_COMP_DEFUALT_SIZE,
}: PaperCompProps) {
    let height: string | number;
    switch (size) {
        case PAPER_COMP_SIZE_AUTO:
            height = PAPER_COMP_100_HEIGHT;
            break;
        case PAPER_COMP_SIZE_LG:
            height = PAPER_COMP_HEIGHT_600;
            break;
        case PAPER_COMP_SIZE_MED:
            height = PAPER_COMP_HEIGHT_300;
            break;
        default:
            height = PAPER_COMP_SIZE_AUTO;
            break;
    }

    return <Paper sx={{ ...paperCompStyle, height: height }}>{comp}</Paper>;
}

export default PaperComp;
