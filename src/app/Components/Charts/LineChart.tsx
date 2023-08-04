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

import Title from "../UI/Title";
import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData, createDataToCharts } from "../../utils/clientUtils";

function Chart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToLineChart = createDataToCharts(dataArray, "line");

    const theme = useTheme();

    return (
        <Fragment>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                    data={dataToLineChart}
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
