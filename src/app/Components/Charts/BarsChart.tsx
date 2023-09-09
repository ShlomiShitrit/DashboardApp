import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";

import { Rows } from "../../Interfaces/interfaces";
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
} from "@/app/GeneralResources/resources";

import {
    BAR_CHART_WIDTH,
    BAR_CHART_HEIGHT,
} from "@/app/GeneralResources/constants";

function BarsChart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year.year);

    useEffect(() => {
        getDataFromDB(setDataArray, FB_EXPANSES_URL);
    }, [orders]);

    const dataToBarChart = createDataToCharts(
        dataArray,
        BAR_CHART_DATA_FUNC_PARAM,
        year
    );

    return (
        <BarChart
            width={BAR_CHART_WIDTH}
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
            <Bar dataKey={BAR_CHART_BAR1_DATA_KEY} fill={BAR_CHART_BAR1_FILL} />
            <Bar dataKey={BAR_CHART_BAR2_DATA_KEY} fill={BAR_CHART_BAR2_FILL} />
        </BarChart>
    );
}

export default BarsChart;
