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
    amount: number;
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reason: string;
    reasonHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    category: string;
    categoryHandler: (event: SelectChangeEvent) => void;
}

export interface PaperCompProps {
    comp: JSX.Element;
    size: string;
}

export interface SelectCompProps {
    name: string;
    nameHandler: (event: SelectChangeEvent) => void;
    items: string[];
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
}

export interface TitleProps {
    children?: React.ReactNode;
}

export interface DepositsProps {
    budgetDialogHandler: () => void;
}

export interface CategoryAmountProps {
    category: string;
    amount: number;
    amountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BudgetDialogProps {
    open: boolean;
    budgetArray: number[];
    handlersArray: ((event: React.ChangeEvent<HTMLInputElement>) => void)[];
    handleClose: () => void;
    handleSubmit: () => void;
}

export interface BudgetFormProps {
    budgetArray: number[];
    handlersArray: ((event: React.ChangeEvent<HTMLInputElement>) => void)[];
}

export interface BudgetObj {
    pets: number;
    food: number;
    clothes: number;
    bills: number;
    car: number;
    other: number;
}

export interface BudgetDisplayProps {
    budget: number;
    category: string;
}
