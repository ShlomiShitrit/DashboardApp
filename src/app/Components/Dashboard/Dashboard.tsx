"use client";
import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";

import Chart from "../Charts/LineChart";
import Deposits from "../UI/Deposits";
import Orders from "../UI/Orders";
import PaperComp from "./PaperComp";
import PieChart from "../Charts/PieChart";
import Speedometer from "../Charts/Speedometer";
import BudgetDialog from "../Budget/BudgetDialog";
import { BudgetObj } from "../../Interfaces/interfaces";
import { patchBudget } from "@/app/utils/serverUtils";

function Dashboard() {
    const [foodBudget, setFoodBudget] = useState(0);
    const [clothesBudget, setClothesBudget] = useState(0);
    const [billsBudget, setBillsBudget] = useState(0);
    const [carBudget, setCarBudget] = useState(0);
    const [otherBudget, setOtherBudget] = useState(0);
    const [petsBudget, setPetsBudget] = useState(0);
    const [budgetDialogOpen, setBudgetDialogOpen] = useState(false);
    const [budgetObject, setBudgetObject] = useState<BudgetObj>({
        pets: 0,
        food: 0,
        clothes: 0,
        bills: 0,
        car: 0,
        other: 0,
    });

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

    const handleBudgetDialogSubmit = () => {
        setBudgetObject({
            pets: petsBudget,
            food: foodBudget,
            clothes: clothesBudget,
            bills: billsBudget,
            car: carBudget,
            other: otherBudget,
        });
        patchBudget(budgetObject);
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

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <PaperComp size="medium" comp={<Chart />} />
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
                    <PaperComp size="large" comp={<PieChart />} />
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <PaperComp
                        size="large"
                        comp={<Speedometer />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PaperComp size="auto" comp={<Orders />} />
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default Dashboard;
