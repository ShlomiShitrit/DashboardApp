import { useState } from "react";
import {
    Rows,
    DataToBarChart,
    DataToLineChart,
    DataToPieChart,
} from "./interfaces";
import { readFromDB, getDataFromDB } from "@/app/Firebase/firebaseFunc";
import {
    UTILS_CHART_TYPE_BARS,
    UTILS_CHART_TYPE_LINE,
    UTILS_CHART_TYPE_PIE,
    UTILS_NAME_SHLOMI,
    UTILS_NAME_LIBI,
    CATEGORIES,
    MONTHES,
    UTILS_CHART_FUNC_ERROR_MSG,
    UTILS_CATEGORIES,
    FB_CATEGORIES_URL,
} from "@/app/GeneralResources/resources";

import {
    CLIENT_UTILS_SHLOMI_AMOUNT_DEFUALT,
    CLIENT_UTILS_LIBI_AMOUNT_DEFUALT,
    CLIENT_UTILS_MONTH_AMOUNT_DEFUALT,
    CLIENT_UTILS_AMOUNT_DEFUALT,
    CLIENT_UTILS_ROUND,
    CLIENT_UTILS_MONTH_PLUS_1,
} from "@/app/GeneralResources/constants";

export function createDataToCharts(
    rows: Rows[],
    chartType: string,
    year: string
) {
    let data: (DataToBarChart | DataToLineChart | DataToPieChart)[] = [];

    for (let i = 1; i < 13; i++) {
        const exapnsePerMonthAndYear = rows.filter(
            (row) => row.month === i && row.year === Number(year)
        );
        if (chartType === UTILS_CHART_TYPE_BARS) {
            const shlomi = exapnsePerMonthAndYear.filter(
                (row) => row.name === UTILS_NAME_SHLOMI
            );
            const libi = exapnsePerMonthAndYear.filter(
                (row) => row.name === UTILS_NAME_LIBI
            );
            let shlomiAmount = CLIENT_UTILS_SHLOMI_AMOUNT_DEFUALT;
            let libiAmount = CLIENT_UTILS_LIBI_AMOUNT_DEFUALT;
            shlomi.forEach((row) => {
                shlomiAmount += row.amount;
            });
            libi.forEach((row) => {
                libiAmount += row.amount;
            });
            data.push({
                shlomi: shlomiAmount,
                libi: libiAmount,
                month: i,
            });
        } else if (chartType === UTILS_CHART_TYPE_LINE) {
            let monthAmount = CLIENT_UTILS_MONTH_AMOUNT_DEFUALT;
            exapnsePerMonthAndYear.forEach((row) => {
                monthAmount += row.amount;
            });

            data.push({
                amount: monthAmount,
                month: i,
            });
        } else if (chartType === UTILS_CHART_TYPE_PIE) {
            const [categories, setCategories] = useState(CATEGORIES);
            getDataFromDB(setCategories, FB_CATEGORIES_URL);
            // readFromDB(UTILS_CATEGORIES).then((data) => {
            //     setCategories(data);
            // });

            for (const category of categories) {
                const exapnsePerMonthAndYearAndCategory = rows.filter(
                    (row) =>
                        row.month === i &&
                        row.year === Number(year) &&
                        row.category === category
                );

                let amount = CLIENT_UTILS_AMOUNT_DEFUALT;
                exapnsePerMonthAndYearAndCategory.forEach((row) => {
                    amount += row.amount;
                });
                data.push({
                    month: i,
                    name: category,
                    amount: amount,
                });
            }
        } else {
            throw new Error(UTILS_CHART_FUNC_ERROR_MSG);
        }
    }
    return data;
}

export const calcPrecentage = (value: number, total: number) => {
    return Math.round((value / total) * CLIENT_UTILS_ROUND);
};

export const calcDataToSpeedometer = (
    rows: Rows[],
    month: number,
    category: string,
    year: string
) => {
    const exapnsePerMonthAndYearAndCategory = rows.filter(
        (row) =>
            row.month === month &&
            row.year === Number(year) &&
            row.category.toLowerCase() === category
    );

    let amount = CLIENT_UTILS_AMOUNT_DEFUALT;
    exapnsePerMonthAndYearAndCategory.forEach((row) => {
        amount += row.amount;
    });
    return amount;
};

export const getMonthNum = (month: string) => {
    return MONTHES.indexOf(month) + CLIENT_UTILS_MONTH_PLUS_1;
};
