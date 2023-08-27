import { Typography, Paper } from "@mui/material";

import { BudgetDisplayProps } from "../../Interfaces/interfaces";
import { budgetDispalyStyle } from "../../Styles/styles";
import {
    BUDGET_DISPLAY_CATEGORY_DEFAULT,
    BUDGET_DISPLAY_TYP_VARIANT,
} from "../../GeneralResources/resources";
import {
    BUDGET_DISPLAY_PROP_DEFAULT,
    BUDGET_DISPLAY_PAPER_ELEVATION,
} from "@/app/GeneralResources/constants";

function BudgetDisplay({
    budget = BUDGET_DISPLAY_PROP_DEFAULT,
    category = BUDGET_DISPLAY_CATEGORY_DEFAULT,
}: BudgetDisplayProps) {
    return (
        <Paper
            sx={budgetDispalyStyle}
            elevation={BUDGET_DISPLAY_PAPER_ELEVATION}
        >
            <Typography variant={BUDGET_DISPLAY_TYP_VARIANT}>
                {category}: {budget}
            </Typography>
        </Paper>
    );
}

export default BudgetDisplay;
