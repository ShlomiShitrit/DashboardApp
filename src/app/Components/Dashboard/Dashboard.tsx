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

function Dashboard() {
    const defaultBudgetsObj = {
        pets: 0,
        food: 0,
        clothes: 0,
        bills: 0,
        car: 0,
        other: 0,
    };

    const [foodBudget, setFoodBudget] = useState(0);
    const [clothesBudget, setClothesBudget] = useState(0);
    const [billsBudget, setBillsBudget] = useState(0);
    const [carBudget, setCarBudget] = useState(0);
    const [otherBudget, setOtherBudget] = useState(0);
    const [petsBudget, setPetsBudget] = useState(0);
    const [budgetDialogOpen, setBudgetDialogOpen] = useState(false);
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

    const handleBudgetDialogSubmit = () => {
        const budgetsArray = [
            { name: "pets", value: petsBudget },
            { name: "food", value: foodBudget },
            { name: "clothes", value: clothesBudget },
            { name: "bills", value: billsBudget },
            { name: "car", value: carBudget },
            { name: "other", value: otherBudget },
        ];
        const filledBudgets = budgetsArray.filter((item) => item.value !== 0);

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
            <Grid  container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <PaperComp size="medium" comp={<LineChartNoSSR />} />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <PaperComp
                        size="auto"
                        comp={
                            <Deposits
                                budgetDialogHandler={handleBudgetDialogOpen}
                            />
                        }
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <BudgetDialog
                        open={budgetDialogOpen}
                        handleClose={handleBudgetDialogClose}
                        handleSubmit={handleBudgetDialogSubmit}
                        handlersArray={handlersArray}
                        budgetArray={budgetArray}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp size="auto" comp={<BarsChartNoSSR />} />
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <PaperComp size="large" comp={<PieChartNoSSR />} />
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <PaperComp size="large" comp={<Speedometer />} />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp size="auto" comp={<Orders />} />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default Dashboard;
