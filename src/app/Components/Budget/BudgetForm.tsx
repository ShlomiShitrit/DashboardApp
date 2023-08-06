import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import CategoryAmount from "./CategoryAmount";
import BudgetDisplay from "./BudgetDisplay";
import { getBudgetData } from "@/app/utils/clientUtils";
import { BudgetFormProps, BudgetObj } from "../../Interfaces/interfaces";

function BudgetForm({ budgetArray = [], handlersArray = [] }: BudgetFormProps) {
    const categories = ["Pets", "Food", "Clothes", "Bills", "Car", "Other"];
    const [budgets, setBudgets] = useState({
        pets: 0,
        food: 0,
        clothes: 0,
        bills: 0,
        car: 0,
        other: 0,
    });

    useEffect(() => {
        getBudgetData(setBudgets);
    }, []);

    return (
        <Fragment>
            <Typography sx={{ mb: "20px" }} variant="h5">
                Current Budgets
            </Typography>
            <Grid container spacing={3}>
                {categories.map((item, index) => (
                    <Grid item xs={12} md={6} sm={6} key={index}>
                        <BudgetDisplay
                            category={item}
                            budget={
                                budgets[item.toLowerCase() as keyof BudgetObj]
                            }
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider sx={{ mb: "30px", mt: "30px" }} variant="middle" />
            <Typography sx={{ mb: "30px", mt: "30px" }} variant="h5">
                Set New Budgets
            </Typography>
            <Grid container spacing={3}>
                {categories.map((category, index) => (
                    <Grid item xs={12} md={6} sm={6} key={index}>
                        <CategoryAmount
                            category={category}
                            amount={budgetArray[index]}
                            amountHandler={handlersArray[index]}
                        />
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default BudgetForm;
