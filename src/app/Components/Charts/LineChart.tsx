import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import Title from "../UI/Title";
import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData, createDataToCharts } from "../../utils/clientUtils";
import { lineChartMargin } from "@/app/Styles/styles";

function Chart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToLineChart = createDataToCharts(dataArray, "line");

    const theme = useTheme();

    return (
        <Fragment>
            <Title>Expanses By Month</Title>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataToLineChart} margin={lineChartMargin}>
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
                    <Tooltip />
                    <Line
                        activeDot={{ r: 8, fill: "#8884d8", stroke: "#8884d8" }}
                        isAnimationActive={true}
                        type="monotone"
                        dataKey="amount"
                        stroke="#82ca9d"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    );
}

export default Chart;
