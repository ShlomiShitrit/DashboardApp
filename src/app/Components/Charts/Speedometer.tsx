import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GaugeComponent from "react-gauge-component";
import { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import dayjs from "dayjs";

import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
import SelectComp from "../Form/SelectComp";
import { Rows, BudgetObj, SpeedometerProps } from "../../GeneralResources/interfaces";
import {
    calcPrecentage,
    calcDataToSpeedometer,
    getMonthNum,
} from "@/app/GeneralResources/utils";

import {
    MONTHES,
    CATEGORIES,
    SPEEDOMETER_CATEGORY_DEFAULT,
    SPEEDOMETER_LABELS_TYPE,
    SPEEDOMETER_LABELS_FILL_TRUE,
    SPEEDOMETER_LABELS_FILL_FALSE,
    SPEEDOMETER_ARCS_COLOR_ARRAY,
    SPEEDOMETER_INPUT_LABEL_MONTH,
    SPEEDOMETER_INPUT_LABEL_CATEGORY,
    SPEEDOMETER_GAUGE_TYPE,
    SPEEDOMETER_ALERT_SEVERITY,
    SPEEDOMETER_ALERT_MESSAGE,
    SPEEDOMETER_CATEGORIES_PATH,
    FB_EXPANSES_URL,
    FB_BUDGETS_URL,
    FB_BUDGET,
    FB_ROWS,
    FB_CATEGORIES_URL,
} from "@/app/GeneralResources/resources";

import {
    SPEEDOMETER_PROPS_DEFAULT_0,
    SPEEDOMETER_BUDGET_PRECENT,
    SPEEDOMETER_LABELS_VALUE_20,
    SPEEDOMETER_LABELS_VALUE_40,
    SPEEDOMETER_LABELS_VALUE_60,
    SPEEDOMETER_LABELS_VALUE_80,
    SPEEDOMETER_LABELS_VALUE_100,
    SPEEDOMETER_ARCS_LIMIT_10,
    SPEEDOMETER_ARCS_LIMIT_30,
    SPEEDOMETER_ARCS_PADDING,
    SPEEDOMETER_ARCS_WIDTH,
    SPEEDOMETER_POINTER_DELAY,
    SPEEDOMETER_GRID_CONT_SPACING,
    SPEEDOMETER_GRID_SIZE_8,
    SPEEDOMETER_GRID_SIZE_7,
    SPEEDOMETER_GRID_SIZE_6,
    SPEEDOMETER_GRID_SIZE_12,
    SPEEDOMETER_GRID_SIZE_11,
    SPEEDOMETER_PRECENT,
} from "@/app/GeneralResources/constants";

function Speedometer({ isAdded = false, isDeleted = false }: SpeedometerProps) {
    const currentMonthNum = dayjs().month();
    const currentMonthStr = MONTHES[currentMonthNum];

    const [month, setMonth] = useState<string>(currentMonthStr);
    const [category, setCategory] = useState<string>(
        SPEEDOMETER_CATEGORY_DEFAULT
    );
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const [budget, setBudget] = useState<BudgetObj>({
        pets: SPEEDOMETER_PROPS_DEFAULT_0,
        food: SPEEDOMETER_PROPS_DEFAULT_0,
        clothes: SPEEDOMETER_PROPS_DEFAULT_0,
        bills: SPEEDOMETER_PROPS_DEFAULT_0,
        car: SPEEDOMETER_PROPS_DEFAULT_0,
        other: SPEEDOMETER_PROPS_DEFAULT_0,
    });

    const [categories, setCategories] = useState<string[]>(CATEGORIES);

    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year.year);

    useEffect(() => {
        getDataFromDB(setCategories, FB_CATEGORIES_URL)
    }, [isAdded, isDeleted]);

    useEffect(() => {
        getDataFromDB(setDataArray, FB_EXPANSES_URL, FB_ROWS);
        getDataFromDB(setBudget, FB_BUDGETS_URL, FB_BUDGET);
    }, [orders]);

    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value.toLowerCase());
    };
    const monthNum = getMonthNum(month);
    const value = calcDataToSpeedometer(dataArray, monthNum, category, year);
    const budgetPrecentage = calcPrecentage(value, budget[category]);

    let overBudget = false;
    if (budgetPrecentage > SPEEDOMETER_BUDGET_PRECENT) {
        overBudget = true;
    } else {
        overBudget = false;
    }

    const labels = {
        markLabel: {
            type: SPEEDOMETER_LABELS_TYPE,
            marks: [
                { value: SPEEDOMETER_LABELS_VALUE_20 },
                { value: SPEEDOMETER_LABELS_VALUE_40 },
                { value: SPEEDOMETER_LABELS_VALUE_60 },
                { value: SPEEDOMETER_LABELS_VALUE_80 },
                { value: SPEEDOMETER_LABELS_VALUE_100 },
            ],
        },
        valueLabel: {
            style: {
                fill: overBudget
                    ? SPEEDOMETER_LABELS_FILL_TRUE
                    : SPEEDOMETER_LABELS_FILL_FALSE,
            },
        },
    };

    const arcs = {
        colorArray: SPEEDOMETER_ARCS_COLOR_ARRAY,
        subArcs: [
            { limit: SPEEDOMETER_ARCS_LIMIT_10 },
            { limit: SPEEDOMETER_ARCS_LIMIT_30 },
            {},
            {},
            {},
        ],
        padding: SPEEDOMETER_ARCS_PADDING,
        width: SPEEDOMETER_ARCS_WIDTH,
    };

    const pointer = {
        elastic: true,
        animationDelay: SPEEDOMETER_POINTER_DELAY,
    };

    return (
        <Fragment>
            <Grid container spacing={SPEEDOMETER_GRID_CONT_SPACING}>
                <Grid
                    item
                    xs={SPEEDOMETER_GRID_SIZE_8}
                    md={SPEEDOMETER_GRID_SIZE_7}
                    lg={SPEEDOMETER_GRID_SIZE_6}
                >
                    <InputLabel>{SPEEDOMETER_INPUT_LABEL_MONTH}</InputLabel>
                    <SelectComp
                        name={month}
                        nameHandler={handleMonthChange}
                        items={MONTHES}
                    />
                </Grid>
                <Grid
                    item
                    xs={SPEEDOMETER_GRID_SIZE_8}
                    md={SPEEDOMETER_GRID_SIZE_7}
                    lg={SPEEDOMETER_GRID_SIZE_6}
                >
                    <InputLabel>{SPEEDOMETER_INPUT_LABEL_CATEGORY}</InputLabel>
                    <SelectComp
                        name={category}
                        nameHandler={handleCategoryChange}
                        items={categories}
                    />
                </Grid>

                <Grid
                    item
                    xs={SPEEDOMETER_GRID_SIZE_12}
                    md={SPEEDOMETER_GRID_SIZE_11}
                    lg={SPEEDOMETER_GRID_SIZE_11}
                >
                    <GaugeComponent
                        value={
                            budgetPrecentage <= SPEEDOMETER_PRECENT
                                ? budgetPrecentage
                                : SPEEDOMETER_PRECENT
                        }
                        type={SPEEDOMETER_GAUGE_TYPE}
                        labels={labels}
                        arc={arcs}
                        pointer={pointer}
                    />
                </Grid>
                {overBudget && (
                    <Grid
                        item
                        xs={SPEEDOMETER_GRID_SIZE_8}
                        md={SPEEDOMETER_GRID_SIZE_8}
                        lg={SPEEDOMETER_GRID_SIZE_8}
                    >
                        <Alert severity={SPEEDOMETER_ALERT_SEVERITY}>
                            {SPEEDOMETER_ALERT_MESSAGE}
                            {budgetPrecentage - SPEEDOMETER_PRECENT}%
                        </Alert>
                    </Grid>
                )}
            </Grid>
        </Fragment>
    );
}

export default Speedometer;
