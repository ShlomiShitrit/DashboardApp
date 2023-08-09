import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import CategoryAmount from "./CategoryAmount";
import BudgetDisplay from "./BudgetDisplay";
import { getBudgetData } from "@/app/utils/clientUtils";
import { BudgetFormProps, BudgetObj } from "../../Interfaces/interfaces";
import {
    budgetFormCurStyle,
    budgetFormDividerStyle,
} from "@/app/Styles/styles";
import {
    CATEGORIES,
    BUDGET_FORM_CUR_TYP_VAR,
    BUDGET_FORM_CUR_TYP_TITLE,
    BUDGET_FORM_DIVIDER_VAR,
    BUDGET_FORM_SET_TYP_VAR,
    BUDGET_FORM_SET_TYP_TXT,
} from "@/app/GeneralResources/resources";

function BudgetForm({ budgetArray = [], handlersArray = [] }: BudgetFormProps) {
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
            <Typography
                sx={budgetFormCurStyle}
                variant={BUDGET_FORM_CUR_TYP_VAR}
            >
                {BUDGET_FORM_CUR_TYP_TITLE}
            </Typography>
            <Grid container spacing={3}>
                {CATEGORIES.map((item, index) => (
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
            <Divider
                sx={budgetFormDividerStyle}
                variant={BUDGET_FORM_DIVIDER_VAR}
            />
            <Typography
                sx={budgetFormDividerStyle}
                variant={BUDGET_FORM_SET_TYP_VAR}
            >
                {BUDGET_FORM_SET_TYP_TXT}
            </Typography>
            <Grid container spacing={3}>
                {CATEGORIES.map((category, index) => (
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
