"use client";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";

import Deposits from "../UI/Deposits";
import Orders from "../UI/Orders";
import PaperComp from "./PaperComp";
import Speedometer from "../Charts/Speedometer";
import BudgetDialog from "../Budget/BudgetDialog";
import { BudgetObj } from "../../Interfaces/interfaces";
import { patchBudget } from "@/app/utils/serverUtils";
import { getBudgetData } from "@/app/utils/clientUtils";
import {
    CATEGORIES,
    DASHBOARD_PAPER_COMP_SIZE_MED,
    DASHBOARD_PAPER_COMP_SIZE_AUTO,
    DASHBOARD_PAPER_COMP_SIZE_LG,
} from "@/app/GeneralResources/resources";

import {
    DASHBOARD_DEFUALT_BUDGET_OBJ,
    DASHBOARD_DEFUALT_BUDGET_STATE_0,
    DASHBOARD_FILLED_BUDGET_0,
    DASHBOARD_GRID_CONT_SPACING,
    DASHBOARD_GRID_SIZE_12,
    DASHBOARD_GRID_SIZE_8,
    DASHBOARD_GRID_SIZE_9,
    DASHBOARD_GRID_SIZE_4,
    DASHBOARD_GRID_SIZE_3,
    DASHBOARD_GRID_SIZE_6,
} from "@/app/GeneralResources/constants";

function Dashboard() {
    const defaultBudgetsObj = {
        pets: DASHBOARD_DEFUALT_BUDGET_OBJ.pets,
        food: DASHBOARD_DEFUALT_BUDGET_OBJ.food,
        clothes: DASHBOARD_DEFUALT_BUDGET_OBJ.clothes,
        bills: DASHBOARD_DEFUALT_BUDGET_OBJ.bills,
        car: DASHBOARD_DEFUALT_BUDGET_OBJ.car,
        other: DASHBOARD_DEFUALT_BUDGET_OBJ.other,
    };

    const [foodBudget, setFoodBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [clothesBudget, setClothesBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [billsBudget, setBillsBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [carBudget, setCarBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [otherBudget, setOtherBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [petsBudget, setPetsBudget] = useState<number>(
        DASHBOARD_DEFUALT_BUDGET_STATE_0
    );
    const [budgetDialogOpen, setBudgetDialogOpen] = useState<boolean>(false);
    const [prevBudgetObject, setPrevBudgetObject] =
        useState<BudgetObj>(defaultBudgetsObj);

    const handleFoodBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFoodBudget(Number(event.target.value));
    };
    const handleClothesBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setClothesBudget(Number(event.target.value));
    };
    const handleBillsBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBillsBudget(Number(event.target.value));
    };
    const handleCarBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCarBudget(Number(event.target.value));
    };
    const handleOtherBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setOtherBudget(Number(event.target.value));
    };
    const handlePetsBudgetChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPetsBudget(Number(event.target.value));
    };

    const handleBudgetDialogOpen = () => {
        setBudgetDialogOpen(true);
    };

    const handleBudgetDialogClose = () => {
        setBudgetDialogOpen(false);
    };

    useEffect(() => {
        getBudgetData(setPrevBudgetObject);
    }, []);

    const namesArray = CATEGORIES.map((item) => item.toLowerCase());

    const handleBudgetDialogSubmit = () => {
        const budgetsArray = [
            { name: namesArray[0], value: petsBudget },
            { name: namesArray[1], value: foodBudget },
            { name: namesArray[2], value: clothesBudget },
            { name: namesArray[3], value: billsBudget },
            { name: namesArray[4], value: carBudget },
            { name: namesArray[5], value: otherBudget },
        ];
        const filledBudgets = budgetsArray.filter(
            (item) => item.value !== DASHBOARD_FILLED_BUDGET_0
        );

        const changedBudgetsObj: { [key: string]: number } = {};
        filledBudgets.forEach((item) => {
            changedBudgetsObj[item.name] = item.value;
        });

        const budgetObjToPatch = {
            ...prevBudgetObject,
            ...changedBudgetsObj,
        };

        patchBudget(budgetObjToPatch);
        setBudgetDialogOpen(false);
    };

    const handlersArray = [
        handlePetsBudgetChange,
        handleFoodBudgetChange,
        handleClothesBudgetChange,
        handleBillsBudgetChange,
        handleCarBudgetChange,
        handleOtherBudgetChange,
    ];

    const budgetArray = [
        petsBudget,
        foodBudget,
        clothesBudget,
        billsBudget,
        carBudget,
        otherBudget,
    ];

    const BarsChartNoSSR = dynamic(() => import("../Charts/BarsChart"), {
        ssr: false,
    });
    const LineChartNoSSR = dynamic(() => import("../Charts/LineChart"), {
        ssr: false,
    });
    const PieChartNoSSR = dynamic(() => import("../Charts/PieChart"), {
        ssr: false,
    });

    return (
        <Fragment>
            <Grid container spacing={DASHBOARD_GRID_CONT_SPACING}>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_8}
                    lg={DASHBOARD_GRID_SIZE_9}
                >
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_MED}
                        comp={<LineChartNoSSR />}
                    />
                </Grid>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_4}
                    lg={DASHBOARD_GRID_SIZE_3}
                >
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_AUTO}
                        comp={
                            <Deposits
                                budgetDialogHandler={handleBudgetDialogOpen}
                            />
                        }
                    />
                </Grid>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_4}
                    lg={DASHBOARD_GRID_SIZE_3}
                >
                    <BudgetDialog
                        open={budgetDialogOpen}
                        handleClose={handleBudgetDialogClose}
                        handleSubmit={handleBudgetDialogSubmit}
                        handlersArray={handlersArray}
                        budgetArray={budgetArray}
                    />
                </Grid>
                <Grid item xs={DASHBOARD_GRID_SIZE_12}>
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_AUTO}
                        comp={<BarsChartNoSSR />}
                    />
                </Grid>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_4}
                    lg={DASHBOARD_GRID_SIZE_6}
                >
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_LG}
                        comp={<PieChartNoSSR />}
                    />
                </Grid>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_4}
                    lg={DASHBOARD_GRID_SIZE_6}
                >
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_LG}
                        comp={<Speedometer />}
                    />
                </Grid>
                <Grid item xs={DASHBOARD_GRID_SIZE_12}>
                    <PaperComp
                        size={DASHBOARD_PAPER_COMP_SIZE_AUTO}
                        comp={<Orders />}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default Dashboard;
