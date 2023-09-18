import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Grid } from "@mui/material";

import BudgetDialog from "@/app/Components/Budget/BudgetDialog";
import CategoriesDialog from "@/app/Components/Categories/CategoriesDialog";
import NamesDialog from "@/app/Components/Names/NamesDialog";
import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
import { isStateActions } from "@/app/store/isState";

import {
    DEPOSITS_BTN_COLOR,
    DEPOSITS_BTN_VAR,
    DEPOSITS_BUDGET_BTN_TXT,
    DEPOSITS_NAMES_BTN_TXT,
    DEPOSITS_CATEHORY_BTN_TXT,
    CATEGORIES,
    FB_CATEGORIES_URL,
    FB_NAMES_URL,
} from "@/app/GeneralResources/resources";

import {
    depositsBtnBoxStyle,
    depositsBtnStyle,
} from "@/app/GeneralResources/styles";

function DialogsGrid() {
    const [budgetDialogOpen, setBudgetDialogOpen] = useState<boolean>(false);
    const [categoriesDialogOpen, setCategoriesDialogOpen] =
        useState<boolean>(false);
    const [namesDialogOpen, setNamesDialogOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>(CATEGORIES);
    const [names, setNames] = useState<string[]>([]);
    const [isNameAdded, setIsNameAdded] = useState<boolean>(false);
    const [isNameDelete, setIsNameDelete] = useState<boolean>(false);

    const { isAdded, isDelete } = useSelector((state: any) => state.isState);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataFromDB(setCategories, FB_CATEGORIES_URL);
    }, [isAdded, isDelete]);

    useEffect(() => {
        getDataFromDB(setNames, FB_NAMES_URL);
    }, [isNameAdded, isNameDelete]);

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

    const handleNamesDialogOpen = () => {
        setNamesDialogOpen(true);
    };

    const handleNamesDialogClose = () => {
        setNamesDialogOpen(false);
    };

    const isAddedHandler = () => {
        dispatch(isStateActions.setIsAdded());
    };

    const isDeleteHandler = () => {
        dispatch(isStateActions.setIsDelete());
    };

    const isNameAddedHandler = () => {
        setIsNameAdded(!isNameAdded);
    };

    const isNameDeleteHandler = () => {
        setIsNameDelete(!isNameDelete);
    };

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <BudgetDialog
                        open={budgetDialogOpen}
                        handleClose={handleBudgetDialogClose}
                        isAdded={isAdded}
                        isDeleted={isDelete}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CategoriesDialog
                        open={categoriesDialogOpen}
                        handleClose={handleCategoriesDialogClose}
                        handleChangeAdd={isAddedHandler}
                        categories={categories}
                        handleChangeDelete={isDeleteHandler}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <NamesDialog
                        open={namesDialogOpen}
                        handleClose={handleNamesDialogClose}
                        handleChangeAdd={isNameAddedHandler}
                        names={names}
                        handleChangeDelete={isNameDeleteHandler}
                    />
                </Grid>
            </Grid>
            <Box sx={depositsBtnBoxStyle}>
                <Button
                    onClick={handleBudgetDialogOpen}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_BUDGET_BTN_TXT}
                </Button>
            </Box>
            <Box sx={depositsBtnBoxStyle}>
                <Button
                    onClick={handleNamesDialogOpen}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_NAMES_BTN_TXT}
                </Button>
                <Button
                    onClick={handleCategoriesDialogOpen}
                    color={DEPOSITS_BTN_COLOR}
                    variant={DEPOSITS_BTN_VAR}
                    sx={depositsBtnStyle}
                >
                    {DEPOSITS_CATEHORY_BTN_TXT}
                </Button>
            </Box>
        </Fragment>
    );
}

export default DialogsGrid;
