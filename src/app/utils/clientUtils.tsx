import {
    Rows,
    DataToBarChart,
    DataToLineChart,
    DataToPieChart,
    BudgetObj,
} from "../Interfaces/interfaces";
import { getData, getBudget } from "./serverUtils";

export function getExpanseData(callback: (data: Rows[]) => void) {
    const rows: Rows[] = [];
    getData().then((data) => {
        const rows: Rows[] = data;
        callback(rows);
    });
    return rows;
}

export function getBudgetData(callback: (data: BudgetObj) => void) {
    const budget: BudgetObj = {
        pets: 0,
        food: 0,
        clothes: 0,
        bills: 0,
        car: 0,
        other: 0,
    };

    getBudget().then((data) => {
        const budget: BudgetObj = data;
        callback(budget);
    });
    return budget;
}

export function createDataToCharts(rows: Rows[], chartType: string) {
    let data: (DataToBarChart | DataToLineChart | DataToPieChart)[] = [];

    for (let i = 1; i < 13; i++) {
        const exapnsePerMonth = rows.filter((row) => row.month === i);
        if (chartType === "bars") {
            const shlomi = exapnsePerMonth.filter(
                (row) => row.name === "Shlomi"
            );
            const libi = exapnsePerMonth.filter((row) => row.name === "Libi");
            let shlomiAmount = 0;
            let libiAmount = 0;
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
        } else if (chartType === "line") {
            let monthAmount = 0;
            exapnsePerMonth.forEach((row) => {
                monthAmount += row.amount;
            });

            data.push({
                amount: monthAmount,
                month: i,
            });
        } else if (chartType === "pie") {
            const categories = [
                "Pets",
                "Food",
                "Clothes",
                "Bills",
                "Car",
                "Other",
            ];
            for (const category of categories) {
                const exapnsePerMonthAndCategory = rows.filter(
                    (row) => row.month === i && row.category === category
                );

                let amount = 0;
                exapnsePerMonthAndCategory.forEach((row) => {
                    amount += row.amount;
                });
                data.push({
                    month: i,
                    name: category,
                    amount: amount,
                });
            }
        } else {
            throw new Error("chart type not supported");
        }
    }
    return data;
}

export const idGenerator = () => {
    return Math.floor(Math.random() * 1000000);
};

export const calcPrecentage = (value: number, total: number) => {
    return Math.round((value / total) * 100);
};

export const calcDataToSpeedometer = (
    rows: Rows[],
    month: number,
    category: string
) => {
    const exapnsePerMonthAndCategory = rows.filter(
        (row) => row.month === month && row.category.toLowerCase() === category
    );

    let amount = 0;
    exapnsePerMonthAndCategory.forEach((row) => {
        amount += row.amount;
    });
    return amount;
};

export const getMonthNum = (month: string) => {
    const MONTHES = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return MONTHES.indexOf(month) + 1;
};
