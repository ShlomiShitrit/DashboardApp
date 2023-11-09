"use client";
import { useState, FormEvent, useEffect } from "react";
import {
    Box,
    Grid,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { getDataFromDB, updateDB } from "@/app/Firebase/firebaseFunc";
import dayjs from "dayjs";
import { EditDialogFormProps } from "@/app/GeneralResources/interfaces";
import { useDispatch } from "react-redux";
import { ordersActions } from "@/app/store/orders";

export default function EditDialogForm({
    data,
    path,
    handleClose,
}: EditDialogFormProps) {
    const [names, setNames] = useState<string[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataFromDB(setCategories, "/categories");
        getDataFromDB(setNames, "/names");
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") || data?.name;
        const category = formData.get("category") || data?.category;
        const amount = Number(formData.get("amount")) || data?.amount;
        const reason = formData.get("reason") || data?.reason;
        const date = formData.get("date") as dayjs.Dayjs | null;
        const day = date?.date() || data?.day;
        const month = date ? date.month() + 1 : undefined || data?.month;
        const year = date?.year() || data?.year;
        const newDate = `${day}/${month}/${year}`;

        const dataToDb = {
            name,
            day,
            month,
            year,
            amount,
            reason,
            category,
            date: newDate,
        };
        updateDB("/expanses/" + path, dataToDb);
        dispatch(ordersActions.submit());
        handleClose();
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <InputLabel>{"Name"}</InputLabel>
                    <Select
                        fullWidth
                        sx={{ height: "50px" }}
                        labelId="Name"
                        id="name"
                        name="name"
                        defaultValue={data?.name}
                        label="Name"
                    >
                        {names?.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputLabel>{"Category"}</InputLabel>
                    <Select
                        fullWidth
                        sx={{ height: "50px" }}
                        labelId="Category"
                        id="category"
                        name="category"
                        defaultValue={data?.category}
                        label="Category"
                    >
                        {categories?.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                            label={"Date of expense"}
                            defaultValue={dayjs(data?.date)}
                        />
                    </DemoContainer>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type={"number"}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                        required
                        id="amount"
                        name="amount"
                        label="Amount"
                        fullWidth
                        autoComplete="amount"
                        variant="standard"
                        defaultValue={data?.amount}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="reason"
                        name="reason"
                        label="Reason"
                        fullWidth
                        autoComplete="reason"
                        variant="standard"
                        defaultValue={data?.reason}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="success" type="submit">
                        Update
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
