"use client";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
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
import { Rows } from "../../GeneralResources/interfaces";
import { createDataToCharts } from "../../GeneralResources/utils";
import { lineChartMargin, lineChartActiveDotStyle } from "@/app/GeneralResources/styles";
import {
    LINE_CHART_DATA_FUNC_PARAM,
    LINE_CHART_TITLE,
    LINE_CHART_CONTAINER_WIDTH,
    LINE_CHART_CONTAINER_HEIGHT,
    LINE_CHART_X_DATA_KEY,
    LINE_CHART_Y_LABEL_POS,
    LINE_CHART_Y_LABEL_STYLE_TXT_ANCHOR,
    LINE_CHART_LABEL_TXT,
    LINE_CHART_LINE_TYPE,
    LINE_CHART_LINE_DATA_KEY,
    LINE_CHART_LINE_STROKE,
    FB_EXPANSES_URL,
} from "@/app/GeneralResources/resources";

function Chart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year.year);

    useEffect(() => {
        getDataFromDB(setDataArray, FB_EXPANSES_URL);
    }, [orders]);

    const dataToLineChart = createDataToCharts(
        dataArray,
        LINE_CHART_DATA_FUNC_PARAM,
        year
    );

    const theme = useTheme();

    return (
        <Fragment>
            <Title>{LINE_CHART_TITLE}</Title>
            <ResponsiveContainer
                width={LINE_CHART_CONTAINER_WIDTH}
                height={LINE_CHART_CONTAINER_HEIGHT}
            >
                <LineChart data={dataToLineChart} margin={lineChartMargin}>
                    <XAxis
                        dataKey={LINE_CHART_X_DATA_KEY}
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position={LINE_CHART_Y_LABEL_POS}
                            style={{
                                textAnchor: LINE_CHART_Y_LABEL_STYLE_TXT_ANCHOR,
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            {LINE_CHART_LABEL_TXT}
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Line
                        activeDot={lineChartActiveDotStyle}
                        isAnimationActive={true}
                        type={LINE_CHART_LINE_TYPE}
                        dataKey={LINE_CHART_LINE_DATA_KEY}
                        stroke={LINE_CHART_LINE_STROKE}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    );
}

export default Chart;
