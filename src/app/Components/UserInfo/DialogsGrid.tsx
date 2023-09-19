import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";

import BudgetDialog from "@/app/Components/Budget/BudgetDialog";
import CategoriesDialog from "@/app/Components/Categories/CategoriesDialog";
import NamesDialog from "@/app/Components/Names/NamesDialog";
import DialogBtn from "@/app/Components/UserInfo/DialogBtn";
import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
import { isStateActions } from "@/app/store/isState";

import {
    DIALOGS_GRID_BUDGET_BTN_TXT,
    DIALOGS_GRID_NAMES_BTN_TXT,
    DIALOGS_GRID_CATEHORY_BTN_TXT,
    CATEGORIES,
    FB_CATEGORIES_URL,
    FB_NAMES_URL,
    DIALOGS_GRID_TYP_VAR,
    DIALOGS_GRID_TYP_COMP,
    DIALOGS_GRID_TYP_TXT,
} from "@/app/GeneralResources/resources";

import {
    DIALOG_GRID_CONT_SPACING_2,
    DIALOG_GRID_CONT_SPACING_3,
    DIALOG_GRID_ITEM_12,
    DIALOG_GRID_ITEM_4,
    DIALOG_GRID_ITEM_3,
    DIALOG_GRID_ITEM_1_25,
} from "@/app/GeneralResources/constants";

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

    const buttonsArr = [
        {
            handler: handleBudgetDialogOpen,
            text: DIALOGS_GRID_BUDGET_BTN_TXT,
        },
        {
            handler: handleNamesDialogOpen,
            text: DIALOGS_GRID_NAMES_BTN_TXT,
        },
        {
            handler: handleCategoriesDialogOpen,
            text: DIALOGS_GRID_CATEHORY_BTN_TXT,
        },
    ];

    return (
        <Fragment>
            <Grid container spacing={DIALOG_GRID_CONT_SPACING_2}>
                <Grid
                    item
                    xs={DIALOG_GRID_ITEM_12}
                    md={DIALOG_GRID_ITEM_4}
                    lg={DIALOG_GRID_ITEM_3}
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
                    xs={DIALOG_GRID_ITEM_12}
                    md={DIALOG_GRID_ITEM_4}
                    lg={DIALOG_GRID_ITEM_3}
                >
                    <CategoriesDialog
                        open={categoriesDialogOpen}
                        handleClose={handleCategoriesDialogClose}
                        handleChangeAdd={isAddedHandler}
                        categories={categories}
                        handleChangeDelete={isDeleteHandler}
                    />
                </Grid>

                <Grid
                    item
                    xs={DIALOG_GRID_ITEM_12}
                    md={DIALOG_GRID_ITEM_4}
                    lg={DIALOG_GRID_ITEM_3}
                >
                    <NamesDialog
                        open={namesDialogOpen}
                        handleClose={handleNamesDialogClose}
                        handleChangeAdd={isNameAddedHandler}
                        names={names}
                        handleChangeDelete={isNameDeleteHandler}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Typography
                variant={DIALOGS_GRID_TYP_VAR}
                component={DIALOGS_GRID_TYP_COMP}
            >
                {DIALOGS_GRID_TYP_TXT}
            </Typography>
            <Grid container spacing={DIALOG_GRID_CONT_SPACING_3}>
                {buttonsArr.map((btn, index) => (
                    <Grid
                        item
                        xs={DIALOG_GRID_ITEM_12}
                        md={DIALOG_GRID_ITEM_3}
                        lg={DIALOG_GRID_ITEM_1_25}
                        key={index}
                    >
                        <DialogBtn
                            dialogHandler={btn.handler}
                            text={btn.text}
                        />
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default DialogsGrid;
