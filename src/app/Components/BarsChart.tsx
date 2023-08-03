import { useState, useEffect } from "react";
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";
import Getter from "./Fetcher";

interface Rows {
    id: number;
    day: number;
    month: number;
    year: number;
    name: string;
    reason: string;
    amount: number;
}

interface DataToBarChart {
    shlomi: number;
    libi: number;
    month: number;
}

function BarsChart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    function getData(callback: (data: Rows[]) => void) {
        const rows: Rows[] = [];
        Getter().then((data) => {
            const rows: Rows[] = data;
            callback(rows);
        });
        return rows;
    }

    useEffect(() => {
        getData(setDataArray);
    }, [dataArray]);

    const createDataToBarChart = (rows: Rows[]) => {
        const data: DataToBarChart[] = [];
        for (let i = 1; i < 13; i++) {
            const exapnsePerMonth = rows.filter((row) => row.month === i);
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
        }
        return data;
    };

    const dataToBarChart = createDataToBarChart(dataArray);

    return (
        <BarChart width={1000} height={230} data={dataToBarChart}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend layout="vertical" verticalAlign="top" align="right" />
            <Bar dataKey="shlomi" fill="#82ca9d" />
            <Bar dataKey="libi" fill="#8884d8" />
        </BarChart>
    );
}

export default BarsChart;
