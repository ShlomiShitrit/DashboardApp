import React from "react";
import { Dayjs } from "dayjs";
import { SelectChangeEvent } from "@mui/material/Select";

export type NullDatejs = Dayjs | null;

export interface Rows {
    id: number;
    day: number | undefined;
    month: number | undefined;
    year: number | undefined;
    name: string;
    reason: string;
    amount: number;
    category: string;
    date: string;
}

export interface DataToBarChart {
    shlomi: number;
    libi: number;
    month: number;
}

export interface DataToLineChart {
    amount: number;
    month: number;
}

export interface DataToPieChart {
    month: number;
    name: string;
    amount: number;
}

export interface DialogFormProps {
    open: boolean;
    handleClose: () => void;
}

export interface FormProps {
    name: string;
    nameHandler: (event: SelectChangeEvent) => void;
    date: NullDatejs;
    dateHandler: (newDate: NullDatejs) => void;
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reason: string;
    reasonHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    category: string;
    categoryHandler: (event: SelectChangeEvent) => void;
    submitHandler: () => void;
}

export interface PaperCompProps {
    comp: JSX.Element;
    size: string;
}

export interface SelectCompProps {
    name: string;
    nameHandler: (event: SelectChangeEvent) => void;
    items: string[];
    height?: string;
}

export interface DatePickerCompProps {
    date: NullDatejs;
    dateHandler: (newDate: NullDatejs) => void;
}

export interface AmountCompProps {
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ReasonCompProps {
    reason: string;
    reasonHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
}

export interface TitleProps {
    children?: React.ReactNode;
}

export interface DepositsProps {
    budgetDialogHandler: () => void;
    categoriesDialogHandler: () => void;
    namesDialogHandler: () => void;
}

export interface CategoryAmountProps {
    amount: number;
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BudgetDialogProps {
    open: boolean;
    handleClose: () => void;
    isAdded: boolean;
    isDeleted: boolean;
}

export interface BudgetFormProps {
    isAdded: boolean;
    isDeleted: boolean;
    onCategoryChange: (event: SelectChangeEvent) => void;
    category: string;
    onAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    amount: number;
}

export interface BudgetObj {
    [key: string]: number;
}

export interface BudgetDisplayProps {
    budget: number;
    category: string;
}

export interface CategoriesDialogProps {
    open: boolean;
    handleClose: () => void;
    handleChangeAdd: () => void;
    categories: string[];
    handleChangeDelete: () => void;
}

export interface CategoriesFormProps {
    handleChangeAdd: () => void;
    categories: string[];
    handleChangeDelete: () => void;
}

export interface SpeedometerProps {
    isAdded: boolean;
    isDeleted: boolean;
}

export interface EmailInputProps {
    emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordLabelProps {
    forgetPasswordRouteHandler: () => void;
    forgetPassword: boolean;
    text: string;
}

export interface PasswordInputProps {
    passwordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
    isKeyPressWork: boolean;
    isDisable: boolean;
}

export interface SignInBtnProps {
    signInHandler: () => void;
    disabled: boolean;
    text: string;
}

export interface NotMemberBtnProps {
    signUpRouteHandler: () => void;
}

export interface SignInHeaderProps {
    text: string;
}

export interface SignUpData {
    budgets: object;
    categories: string[];
    expanse: object;
    userInfo: object;
    names: string[];
}

export interface NameInputProps {
    nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export interface NamesDialogProps {
    open: boolean;
    handleClose: () => void;
    handleChangeAdd: () => void;
    handleChangeDelete: () => void;
    names: string[];
}

export interface NamesFormProps {
    handleChangeAdd: () => void;
    names: string[];
    handleChangeDelete: () => void;
}
