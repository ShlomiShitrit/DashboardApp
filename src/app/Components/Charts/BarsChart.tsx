import { useState, useEffect } from "react";
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";

import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData, createDataToCharts } from "../../utils/clientUtils";
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
} from "@/app/GeneralResources/resources";

function BarsChart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToBarChart = createDataToCharts(
        dataArray,
        BAR_CHART_DATA_FUNC_PARAM
    );

    return (
        <BarChart width={1000} height={230} data={dataToBarChart}>
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
