import { Fragment, useState, useEffect } from "react";
import GaugeComponent from "react-gauge-component";
import { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import SelectComp from "../Form/SelectComp";
import { Rows, BudgetObj } from "../../Interfaces/interfaces";
import {
    calcPrecentage,
    getExpanseData,
    calcDataToSpeedometer,
    getMonthNum,
    getBudgetData,
} from "@/app/utils/clientUtils";

import {
    MONTHES,
    CATEGORIES,
    SPEEDOMETER_MONTH_DEFAULT,
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
} from "@/app/GeneralResources/resources";

function Speedometer() {
    const [month, setMonth] = useState(SPEEDOMETER_MONTH_DEFAULT);
    const [category, setCategory] = useState<keyof BudgetObj>(
        SPEEDOMETER_CATEGORY_DEFAULT
    );
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const [budget, setBudget] = useState<BudgetObj>({
        pets: 0,
        food: 0,
        clothes: 0,
        bills: 0,
        car: 0,
        other: 0,
    });

    useEffect(() => {
        getExpanseData(setDataArray);
        getBudgetData(setBudget);
    }, []);

    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value.toLowerCase() as keyof BudgetObj);
    };
    const monthNum = getMonthNum(month);
    const value = calcDataToSpeedometer(dataArray, monthNum, category);
    const budgetPrecentage = calcPrecentage(value, budget[category]);

    let overBudget = false;
    if (budgetPrecentage > 100) {
        overBudget = true;
    } else {
        overBudget = false;
    }

    const labels = {
        markLabel: {
            type: SPEEDOMETER_LABELS_TYPE,
            marks: [
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 },
                { value: 100 },
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
        subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
        padding: 0.02,
        width: 0.3,
    };

    const pointer = {
        elastic: true,
        animationDelay: 1,
    };

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={8} md={7} lg={6}>
                    <InputLabel>{SPEEDOMETER_INPUT_LABEL_MONTH}</InputLabel>
                    <SelectComp
                        name={month}
                        nameHandler={handleMonthChange}
                        items={MONTHES}
                    />
                </Grid>
                <Grid item xs={8} md={7} lg={6}>
                    <InputLabel>{SPEEDOMETER_INPUT_LABEL_CATEGORY}</InputLabel>
                    <SelectComp
                        name={category}
                        nameHandler={handleCategoryChange}
                        items={CATEGORIES}
                    />
                </Grid>

                <Grid item xs={12} md={11} lg={11}>
                    <GaugeComponent
                        value={budgetPrecentage <= 100 ? budgetPrecentage : 100}
                        type={SPEEDOMETER_GAUGE_TYPE}
                        labels={labels}
                        arc={arcs}
                        pointer={pointer}
                    />
                </Grid>
                {overBudget && (
                    <Grid item xs={8} md={8} lg={8}>
                        <Alert severity={SPEEDOMETER_ALERT_SEVERITY}>
                            {SPEEDOMETER_ALERT_MESSAGE}
                            {budgetPrecentage - 100}%
                        </Alert>
                    </Grid>
                )}
            </Grid>
        </Fragment>
    );
}

export default Speedometer;
