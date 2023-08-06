import { Typography, Paper } from "@mui/material";

import { BudgetDisplayProps } from "../../Interfaces/interfaces";

function BudgetDisplay({
    budget = 1000,
    category = "Pets",
}: BudgetDisplayProps) {
    return (

        <Paper
            sx={{
                bgcolor: "background.default",
                textAlign: "center",
                width: "50%",
                height: "130%",
            }}
            elevation={3}
        >
            <Typography variant="button">
                {category}: {budget}
            </Typography>
        </Paper>
    );
}

export default BudgetDisplay;
