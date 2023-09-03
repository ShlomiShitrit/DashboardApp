import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import CategoryAmount from "./CategoryAmount";
import BudgetDisplay from "./BudgetDisplay";
import SelectComp from "@/app/Components/Form/SelectComp";
import { BudgetFormProps, BudgetObj } from "../../Interfaces/interfaces";
import {
    budgetFormCurStyle,
    budgetFormDividerStyle,
} from "@/app/Styles/styles";

import { readFromDB, readFromBudgetsDB } from "@/app/Firebase/firebaseFunc";

import {
    CATEGORIES,
    BUDGET_FORM_CUR_TYP_VAR,
    BUDGET_FORM_CUR_TYP_TITLE,
    BUDGET_FORM_DIVIDER_VAR,
    BUDGET_FORM_SET_TYP_VAR,
    BUDGET_FORM_SET_TYP_TXT,
    BUDGET_FORM_CATEGORY_DEFAULT,
    BUDGET_FORM_CATEGORIES_PATH,
    BUDGET_FORM_BUDGETS_PATH,
} from "@/app/GeneralResources/resources";

import {
    BUDGET_FORM_PROPS_DEFAULT,
    BUDGET_FORM_GRID_CONT_DISPLAY_SPACING,
    BUDGET_FORM_GRID_ITEM_DISPLAY_SIZE,
    BUDGET_FORM_GRID_CONT_AMOUNT_SPACING,
    BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE,
    BUDGET_FORM_AMOUNT_DEFAULT,
} from "@/app/GeneralResources/constants";

function BudgetForm({
    isAdded = false,
    isDeleted = false,
    onCategoryChange = () => null,
    category = BUDGET_FORM_CATEGORY_DEFAULT,
    onAmountChange = () => null,
    amount = BUDGET_FORM_AMOUNT_DEFAULT,
}: BudgetFormProps) {
    const [budgets, setBudgets] = useState<BudgetObj>({
        pets: BUDGET_FORM_PROPS_DEFAULT.pets,
        food: BUDGET_FORM_PROPS_DEFAULT.food,
        clothes: BUDGET_FORM_PROPS_DEFAULT.clothes,
        bills: BUDGET_FORM_PROPS_DEFAULT.bills,
        car: BUDGET_FORM_PROPS_DEFAULT.car,
        other: BUDGET_FORM_PROPS_DEFAULT.other,
    });
    const [categories, setCategories] = useState<string[]>(CATEGORIES);

    useEffect(() => {
        readFromDB(BUDGET_FORM_CATEGORIES_PATH).then((data) => {
            setCategories(data);
        });
        readFromBudgetsDB(BUDGET_FORM_BUDGETS_PATH).then((data) => {
            setBudgets(data);
        });
    }, [isAdded, isDeleted]);

    return (
        <Fragment>
            <Typography
                sx={budgetFormCurStyle}
                variant={BUDGET_FORM_CUR_TYP_VAR}
            >
                {BUDGET_FORM_CUR_TYP_TITLE}
            </Typography>
            <Grid container spacing={BUDGET_FORM_GRID_CONT_DISPLAY_SPACING}>
                {categories.map((item, index) => (
                    <Grid
                        item
                        xs={BUDGET_FORM_GRID_ITEM_DISPLAY_SIZE.xs}
                        md={BUDGET_FORM_GRID_ITEM_DISPLAY_SIZE.md}
                        sm={BUDGET_FORM_GRID_ITEM_DISPLAY_SIZE.sm}
                        key={index}
                    >
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
            <Grid container spacing={BUDGET_FORM_GRID_CONT_AMOUNT_SPACING}>
                <Grid
                    item
                    xs={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.xs}
                    md={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.md}
                    sm={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.sm}
                >
                    <SelectComp
                        items={categories}
                        name={category}
                        nameHandler={onCategoryChange}
                    />
                </Grid>
                <Grid
                    item
                    xs={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.xs}
                    md={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.md}
                    sm={BUDGET_FORM_GRID_ITEM_AMOUNT_SIZE.sm}
                >
                    <CategoryAmount
                        amount={amount}
                        amountHandler={onAmountChange}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default BudgetForm;
