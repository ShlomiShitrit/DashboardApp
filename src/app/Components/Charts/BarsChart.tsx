import { useState, useEffect } from "react";
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";

import { Rows } from "../../Interfaces/interfaces";
import { getExpanseData, createDataToCharts } from "../../utils/clientUtils";

function BarsChart() {
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToBarChart = createDataToCharts(dataArray, "bars");

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
