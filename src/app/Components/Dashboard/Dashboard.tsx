"use client";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";

import Deposits from "../UI/Deposits";
import Orders from "../UI/Orders";
import PaperComp from "./PaperComp";
import CategoriesDialog from "../Categories/CategoriesDialog";
import Speedometer from "../Charts/Speedometer";
import BudgetDialog from "../Budget/BudgetDialog";
import {
    CATEGORIES,
    DASHBOARD_PAPER_COMP_SIZE_MED,
    DASHBOARD_PAPER_COMP_SIZE_AUTO,
    DASHBOARD_PAPER_COMP_SIZE_LG,
    DASHBOARD_CATEGORIES_PATH,
} from "@/app/GeneralResources/resources";

import {
    DASHBOARD_GRID_CONT_SPACING,
    DASHBOARD_GRID_SIZE_12,
    DASHBOARD_GRID_SIZE_8,
    DASHBOARD_GRID_SIZE_9,
    DASHBOARD_GRID_SIZE_4,
    DASHBOARD_GRID_SIZE_3,
    DASHBOARD_GRID_SIZE_6,
} from "@/app/GeneralResources/constants";

import {
    readFromDB,
} from "@/app/Firebase/firebaseFunc";

function Dashboard() {
    const [budgetDialogOpen, setBudgetDialogOpen] = useState<boolean>(false);
    const [categoriesDialogOpen, setCategoriesDialogOpen] =
        useState<boolean>(false);

    const [categories, setCategories] = useState<string[]>(CATEGORIES);
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const [isDelete, setIsDelete] = useState<boolean>(false);

    const handleBudgetDialogOpen = () => {
        setBudgetDialogOpen(true);
    };

    const handleBudgetDialogClose = () => {
        setBudgetDialogOpen(false);
    };
    const handleCategoriesDialogOpen = () => {
        setCategoriesDialogOpen(true);
    };

    const handleCategoriesDialogClose = () => {
        setCategoriesDialogOpen(false);
    };

    useEffect(() => {
        readFromDB(DASHBOARD_CATEGORIES_PATH).then((data: string[]) => {
            if (data) {
                setCategories(data);
            }
        });
    }, [isAdded, isDelete]);

    const isAddedHandler = () => {
        setIsAdded(!isAdded);
    };

    const isDeleteHandler = () => {
        setIsDelete(!isDelete);
    };

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
                                categoriesDialogHandler={
                                    handleCategoriesDialogOpen
                                }
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
                        isAdded={isAdded}
                        isDeleted={isDelete}
                    />
                </Grid>
                <Grid
                    item
                    xs={DASHBOARD_GRID_SIZE_12}
                    md={DASHBOARD_GRID_SIZE_4}
                    lg={DASHBOARD_GRID_SIZE_3}
                >
                    <CategoriesDialog
                        open={categoriesDialogOpen}
                        handleClose={handleCategoriesDialogClose}
                        handleChangeAdd={isAddedHandler}
                        categories={categories}
                        handleChangeDelete={isDeleteHandler}
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
                        comp={<Speedometer isAdded={isAdded} isDeleted={isDelete} />}
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
