"use client";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { NamesFormProps } from "@/app/GeneralResources/interfaces";
import { namesActions } from "@/app/store/names";
import { updateDB, deleteFromDB } from "@/app/Firebase/firebaseFunc";

import {
    NAMES_FORM_EMPTY_STR,
    NAMES_FORM_NAMES_URL_EX,
    NAMES_FORM_TXT_FIELD_ID,
    NAMES_FORM_TXT_FIELD_LABEL,
    NAMES_FORM_TXT_FIELD_VAR,
    NAMES_FORM_NAMES_URL,
    NAMES_FORM_CHECKBOX_EDGE,
} from "@/app/GeneralResources/resources";
import {
    NAMES_FORM_INDEX_1,
    NAMES_FORM_INDEX_MINUS_1,
    NAMES_FORM_LENGTH_0,
} from "@/app/GeneralResources/constants";
import {
    namesFormListStyle,
    namesFormTxtFieldStyle,
    namesFormAddBtnStyle,
} from "@/app/GeneralResources/styles";

function NamesForm({
    handleChangeAdd = () => null,
    names = [],
    handleChangeDelete = () => null,
}: NamesFormProps) {
    const [checked, setChecked] = useState<number[]>([]);
    const [name, setNames] = useState<string>(NAMES_FORM_EMPTY_STR);
    const dispatch = useDispatch();
    const namesIndexes = names.map((name: string) => names.indexOf(name));

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === NAMES_FORM_INDEX_MINUS_1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, NAMES_FORM_INDEX_1);
        }
        setChecked(newChecked);
    };

    const handleNamesChange = (event: any) => {
        setNames(event.target.value);
    };

    const handleDeleteName = () => {
        checked.forEach((value: number) => {
            deleteFromDB(NAMES_FORM_NAMES_URL_EX + value);
            dispatch(namesActions.deleteName(value));
            handleChangeDelete();
        });
    };

    const handleAddName = () => {
        if (!names.includes(name) && name !== NAMES_FORM_EMPTY_STR) {
            const objToNameDB: {
                [key: number]: string;
            } = {};
            objToNameDB[names.length] = name;
            updateDB(NAMES_FORM_NAMES_URL, objToNameDB);
            dispatch(namesActions.addName(name));
            handleChangeAdd();
        }
    };

    return (
        <Fragment>
            <List sx={namesFormListStyle}>
                {namesIndexes.map((value: number) => {
                    return (
                        <ListItem key={value} disablePadding>
                            <ListItemButton onClick={handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge={NAMES_FORM_CHECKBOX_EDGE}
                                        checked={
                                            checked.indexOf(value) !==
                                            NAMES_FORM_INDEX_MINUS_1
                                        }
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={value.toString()}
                                    primary={`${names[value]}`}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
                <IconButton
                    disabled={checked.length === NAMES_FORM_LENGTH_0}
                    onClick={handleDeleteName}
                >
                    <DeleteIcon />
                </IconButton>
            </List>
            <TextField
                onChange={handleNamesChange}
                sx={namesFormTxtFieldStyle}
                id={NAMES_FORM_TXT_FIELD_ID}
                label={NAMES_FORM_TXT_FIELD_LABEL}
                variant={NAMES_FORM_TXT_FIELD_VAR}
            />
            <IconButton sx={namesFormAddBtnStyle} onClick={handleAddName}>
                <AddIcon />
            </IconButton>
        </Fragment>
    );
}

export default NamesForm;
