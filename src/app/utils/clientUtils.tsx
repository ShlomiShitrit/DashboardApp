import {
    Rows,
    DataToBarChart,
    DataToLineChart,
    DataToPieChart,
} from "../Interfaces/interfaces";
import { getData } from "./serverUtils";

export function getExpanseData(callback: (data: Rows[]) => void) {
    const rows: Rows[] = [];
    getData().then((data) => {
        const rows: Rows[] = data;
        callback(rows);
    });
    return rows;
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
