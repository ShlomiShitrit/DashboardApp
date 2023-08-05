import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import CategoryAmount from "./CategoryAmount";
import { BudgetFormProps } from "../../Interfaces/interfaces";

function BudgetForm({ budgetArray = [], handlersArray = [] }: BudgetFormProps) {
    const categories = ["Pets", "Food", "Clothes", "Bills", "Car", "Other"];
    return (
        <Fragment>
            <Grid container spacing={3}>
                {categories.map((category, index) => (
                    <Grid item xs={12}>
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
