import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoriesActions } from "@/app/store/categories";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

import { CategoriesFormProps } from "@/app/Interfaces/interfaces";

import { updateDB, deleteFromDB } from "@/app/Firebase/firebaseFunc";

import {
    CATEGORIES_FORM_CHECKBOX_EDGE,
    CATEGORIES_FORM_TXT_FIELD_ID,
    CATEGORIES_FORM_TXT_FIELD_LABEL,
    CATEGORIES_FORM_TXT_FIELD_VAR,
    CATEGORIES_FORM_EMPTY_STR,
} from "@/app/GeneralResources/resources";
import {
    categoriesFormListStyle,
    categoriesFormTxtFieldStyle,
    categoriesFormAddBtnStyle,
} from "@/app/Styles/styles";
import {
    CATEGORIES_FORM_INDEX_1,
    CATEGORIES_FORM_INDEX_MINUS_1,
    CATEGORIES_FORM_LENGTH_0,
} from "@/app/GeneralResources/constants";

function CategoriesForm({
    handleChangeAdd = () => null,
    categories = [],
    handleChangeDelete = () => null,
}: CategoriesFormProps) {
    const [checked, setChecked] = useState<number[]>([]);
    const [category, setCategory] = useState<string>("");
    const dispatch = useDispatch();
    const categoriesIndexes = categories.map((category: string) =>
        categories.indexOf(category)
    );

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === CATEGORIES_FORM_INDEX_MINUS_1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, CATEGORIES_FORM_INDEX_1);
        }
        setChecked(newChecked);
    };

    const handleCategoryChange = (event: any) => {
        setCategory(event.target.value);
    };

    const handleDeleteCategories = () => {
        checked.forEach((value: number) => {
            deleteFromDB("categories/" + value);
            dispatch(categoriesActions.deleteCategory(value));
            handleChangeDelete();
        });
    };

    const handleAddCategory = () => {
        if (
            !categories.includes(category) &&
            category !== CATEGORIES_FORM_EMPTY_STR
        ) {
            const objToDB: {
                [key: number]: string;
            } = {};
            objToDB[categories.length] = category;
            updateDB("categories", objToDB);
            dispatch(categoriesActions.addCategory(category));
            handleChangeAdd();
        }
    };

    return (
        <Fragment>
            <List sx={categoriesFormListStyle}>
                {categoriesIndexes.map((value: number) => {
                    return (
                        <ListItem key={value} disablePadding>
                            <ListItemButton onClick={handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge={CATEGORIES_FORM_CHECKBOX_EDGE}
                                        checked={
                                            checked.indexOf(value) !==
                                            CATEGORIES_FORM_INDEX_MINUS_1
                                        }
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={value.toString()}
                                    primary={`${categories[value]}`}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
                <IconButton
                    disabled={checked.length === CATEGORIES_FORM_LENGTH_0}
                    onClick={handleDeleteCategories}
                >
                    <DeleteIcon />
                </IconButton>
            </List>
            <TextField
                onChange={handleCategoryChange}
                sx={categoriesFormTxtFieldStyle}
                id={CATEGORIES_FORM_TXT_FIELD_ID}
                label={CATEGORIES_FORM_TXT_FIELD_LABEL}
                variant={CATEGORIES_FORM_TXT_FIELD_VAR}
            />
            <IconButton
                sx={categoriesFormAddBtnStyle}
                onClick={handleAddCategory}
            >
                <AddIcon />
            </IconButton>
        </Fragment>
    );
}

export default CategoriesForm;
