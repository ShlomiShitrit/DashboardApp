import { Typography, Paper } from "@mui/material";

import { BudgetDisplayProps } from "../../Interfaces/interfaces";
import { budgetDispalyStyle } from "../../Styles/styles";
import {
    BUDGET_DISPLAY_CATEGORY_DEFAULT,
    BUDGET_DISPLAY_TYP_VARIANT,
} from "../../GeneralResources/resources";

function BudgetDisplay({
    budget = 1000,
    category = BUDGET_DISPLAY_CATEGORY_DEFAULT,
}: BudgetDisplayProps) {
    return (
        <Paper sx={budgetDispalyStyle} elevation={3}>
            <Typography variant={BUDGET_DISPLAY_TYP_VARIANT}>
                {category}: {budget}
            </Typography>
        </Paper>
    );
}

export default BudgetDisplay;
