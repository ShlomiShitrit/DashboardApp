"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";

import { Rows } from "../../GeneralResources/interfaces";
import { getDataFromDB } from "@/app/Firebase/firebaseFunc";
import { createDataToCharts } from "../../GeneralResources/utils";
import {
    BAR_CHART_DATA_FUNC_PARAM,
    BAR_CHART_X_DATA_KEY,
    BAR_CHART_LEGEND_LAYOUT,
    BAR_CHART_LEGEND_VERTICAL_ALIGN,
    BAR_CHART_LEGEND_ALIGN,
    BAR_CHART_BAR1_DATA_KEY,
    BAR_CHART_BAR2_DATA_KEY,
    BAR_CHART_BAR1_FILL,
    BAR_CHART_BAR2_FILL,
    FB_EXPANSES_URL,
    FB_NAMES_URL,
    BAR_CHART_BARS_FILL,
} from "@/app/GeneralResources/resources";

import {
    BAR_CHART_WIDTH,
    BAR_CHART_HEIGHT,
} from "@/app/GeneralResources/constants";
import useMobile from "@/app/hooks/useMobile";
import useMounted from "@/app/hooks/useMount";

function BarsChart() {
    const windowWidth = useMobile();
    const [isMobile, setIsMobile] = useState<boolean>(windowWidth <= 768);
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const [names, setNames] = useState<string[]>([]);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year.year);
    const isMounted = useMounted();

    useEffect(() => {
        getDataFromDB(setDataArray, FB_EXPANSES_URL);
        getDataFromDB(setNames, FB_NAMES_URL);
    }, [orders, isMounted]);

    useEffect(() => {
        setIsMobile(windowWidth <= 768);
    }, [windowWidth]);

    const dataToBarChart = createDataToCharts(
        dataArray,
        BAR_CHART_DATA_FUNC_PARAM,
        year
    );

    const chartWidth = isMobile ? 370 : BAR_CHART_WIDTH;

    return (
        <BarChart
            width={chartWidth}
            height={BAR_CHART_HEIGHT}
            data={dataToBarChart}
        >
            <XAxis dataKey={BAR_CHART_X_DATA_KEY} />
            <YAxis />
            <Tooltip />
            <Legend
                layout={BAR_CHART_LEGEND_LAYOUT}
                verticalAlign={BAR_CHART_LEGEND_VERTICAL_ALIGN}
                align={BAR_CHART_LEGEND_ALIGN}
            />
            {names.map((name, index) => (
                <Bar
                    key={index}
                    dataKey={name}
                    fill={BAR_CHART_BARS_FILL[index]}
                />
            ))}
        </BarChart>
    );
}

export default BarsChart;
