import { useState, useEffect } from "react";
import {
    PieChart as Chart,
    Pie,
    Sector,
    ResponsiveContainer,
    Cell,
    Legend,
} from "recharts";
import { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { DataToPieChart, Rows } from "../../Interfaces/interfaces";
import {
    getExpanseData,
    createDataToCharts,
    getMonthNum,
} from "../../utils/clientUtils";
import SelectComp from "../Form/SelectComp";
import { pieChartTypStyle } from "../../Styles/styles";
import {
    PIE_CHART_TXT_ANCHOR_START,
    PIE_CHART_TXT_ANCHOR_END,
    PIE_CHART_TXT_ANCHOR_MIDDLE,
    PIE_CHART_PATH_FILL,
    PIE_CHART_CIRCLE_STROKE,
    PIE_CHART_TXT_TAG_FILL,
    PIE_CHART_MONTH_DEFAULT,
    PIE_CHART_DATA_FUNC_PARAM,
    PIE_CHART_COLORS,
    PIE_CHART_TYP_VAR,
    PIE_CHART_TYP_TXT,
    PIE_CHART_CONTAINER_WIDTH,
    PIE_CHART_CONTAINER_HEIGHT,
    PIE_CHART_DATA_KEY,
    PIE_CHART_NAME_KEY,
    PIE_CHART_CX,
    PIE_CHART_CY,
    PIE_CHART_FILL,
    MONTHES,
} from "@/app/GeneralResources/resources";

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor =
        cos >= 0 ? PIE_CHART_TXT_ANCHOR_START : PIE_CHART_TXT_ANCHOR_END;

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={8}
                textAnchor={PIE_CHART_TXT_ANCHOR_MIDDLE}
                fill={fill}
            >
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill={PIE_CHART_PATH_FILL}
            />
            <circle
                cx={ex}
                cy={ey}
                r={2}
                fill={fill}
                stroke={PIE_CHART_CIRCLE_STROKE}
            />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={PIE_CHART_TXT_TAG_FILL}
                fontSize={14}
            >{`${(percent * 100).toFixed(2)}%`}</text>
        </g>
    );
};

function PieChart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const [month, setMonth] = useState<string>(PIE_CHART_MONTH_DEFAULT);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToPieChart = createDataToCharts(
        dataArray,
        PIE_CHART_DATA_FUNC_PARAM
    ) as DataToPieChart[];

    const monthNum = getMonthNum(month);
    const dataPerMonth = dataToPieChart.filter(
        (item) => item.month === monthNum
    );

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const onMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
    };

    return (
        <Grid container spacing={3}>
            <Grid sm={6} md={6} lg={6}>
                <Typography sx={pieChartTypStyle} variant={PIE_CHART_TYP_VAR}>
                    {PIE_CHART_TYP_TXT}
                </Typography>
            </Grid>
            <Grid sm={6} md={6} lg={6}>
                <SelectComp
                    items={MONTHES}
                    name={month}
                    nameHandler={onMonthChange}
                />
            </Grid>
            <ResponsiveContainer
                width={PIE_CHART_CONTAINER_WIDTH}
                height={PIE_CHART_CONTAINER_HEIGHT}
            >
                <Grid sm={12} md={12} lg={12} xl={12}>
                    <Chart width={500} height={500}>
                        <Pie
                            isAnimationActive={true}
                            dataKey={PIE_CHART_DATA_KEY}
                            nameKey={PIE_CHART_NAME_KEY}
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            startAngle={0}
                            endAngle={360}
                            data={dataPerMonth}
                            cx={PIE_CHART_CX}
                            cy={PIE_CHART_CY}
                            innerRadius={60}
                            outerRadius={150}
                            fill={PIE_CHART_FILL}
                            onMouseEnter={onPieEnter}
                            label
                        >
                            {dataPerMonth.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        PIE_CHART_COLORS[
                                            index % PIE_CHART_COLORS.length
                                        ]
                                    }
                                />
                            ))}
                        </Pie>
                        <Legend />
                    </Chart>
                </Grid>
            </ResponsiveContainer>
        </Grid>
    );
}

export default PieChart;
