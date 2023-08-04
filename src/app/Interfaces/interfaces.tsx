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
}

export interface PaperCompProps {
    comp: JSX.Element;
    orders: boolean;
}

export interface SelectCompProps {
    name: string;
    nameHandler: (event: SelectChangeEvent) => void;
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
