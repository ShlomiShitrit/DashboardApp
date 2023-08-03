import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
} from "recharts";
import Title from "./Title";
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

interface DataToChart {
    amount: number;
    month: number;
}

function Chart() {
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

    const createDataToChart = (rows: Rows[]) => {

        const data: DataToChart[] = [];
        for (let i = 1; i < 13; i++) {
            const exapnsePerMonth = rows.filter((row) => row.month === i);
            let monthAmount = 0;
            exapnsePerMonth.forEach((row) => {
                monthAmount += row.amount;
            });

            data.push({
                amount: monthAmount,
                month: i,
            });
        }
        return data;
    };

    const dataToChart = createDataToChart(dataArray);

    const theme = useTheme();

    return (
        <Fragment>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                    data={dataToChart}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="month"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: "middle",
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Expanses
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    );
}

export default Chart;
