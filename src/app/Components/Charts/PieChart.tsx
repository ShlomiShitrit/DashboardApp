import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

import {
    PIE_CHART_RADIANS,
    PIE_CHART_RADIUS_10,
    PIE_CHART_RADIUS_30,
    PIE_CHART_COS_0,
    PIE_CHART_COS_1,
    PIE_CHART_COS_MINUS_1,
    PIE_CHART_COS_22,
    PIE_CHART_COS_12,
    PIE_CHART_DY_8,
    PIE_CHART_SECTOR_INNER_RADIUS,
    PIE_CHART_SECTOR_OUTER_RADIUS,
    PIE_CHART_CIRCLE_R,
    PIE_CHART_FONT_SIZE_14,
    PIE_CHART_PRECENT_100,
    PIE_CHART_PRECENT_DECIMAL,
    PIE_CHART_ACTIVE_IND_DEFUALT,
    PIE_CHART_MAIN_GRID_CONT_SPACING,
    PIE_CHART_GRID_SIZE_6,
    PIE_CHART_GRID_SIZE_12,
    PIE_CHART_CHART_WIDTH,
    PIE_CHART_CHART_HEIGHT,
    PIE_CHART_START_ANGLE,
    PIE_CHART_END_ANGLE,
    PIE_CHART_PIE_INNER_RADIUS,
    PIE_CHART_PIE_OUTER_RADIUS,
} from "@/app/GeneralResources/constants";

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / PIE_CHART_RADIANS;
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
    const sx = cx + (outerRadius + PIE_CHART_RADIUS_10) * cos;
    const sy = cy + (outerRadius + PIE_CHART_RADIUS_10) * sin;
    const mx = cx + (outerRadius + PIE_CHART_RADIUS_30) * cos;
    const my = cy + (outerRadius + PIE_CHART_RADIUS_30) * sin;
    const ex =
        mx +
        (cos >= PIE_CHART_COS_0 ? PIE_CHART_COS_1 : PIE_CHART_COS_MINUS_1) *
            PIE_CHART_COS_22;
    const ey = my;
    const textAnchor =
        cos >= PIE_CHART_COS_0
            ? PIE_CHART_TXT_ANCHOR_START
            : PIE_CHART_TXT_ANCHOR_END;

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={PIE_CHART_DY_8}
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
                innerRadius={outerRadius + PIE_CHART_SECTOR_INNER_RADIUS}
                outerRadius={outerRadius + PIE_CHART_SECTOR_OUTER_RADIUS}
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
                r={PIE_CHART_CIRCLE_R}
                fill={fill}
                stroke={PIE_CHART_CIRCLE_STROKE}
            />
            <text
                x={
                    ex +
                    (cos >= PIE_CHART_COS_0
                        ? PIE_CHART_COS_1
                        : PIE_CHART_COS_MINUS_1) *
                        PIE_CHART_COS_12
                }
                y={ey}
                textAnchor={textAnchor}
                fill={PIE_CHART_TXT_TAG_FILL}
                fontSize={PIE_CHART_FONT_SIZE_14}
            >{`${(percent * PIE_CHART_PRECENT_100).toFixed(
                PIE_CHART_PRECENT_DECIMAL
            )}%`}</text>
        </g>
    );
};

function PieChart() {
    const [activeIndex, setActiveIndex] = useState(
        PIE_CHART_ACTIVE_IND_DEFUALT
    );
    const [dataArray, setDataArray] = useState<Rows[]>([]);
    const [month, setMonth] = useState<string>(PIE_CHART_MONTH_DEFAULT);
    const orders = useSelector((state: any) => state.orders);
    const year = useSelector((state: any) => state.year.year);


    useEffect(() => {
        getExpanseData(setDataArray);
    }, [orders]);

    const dataToPieChart = createDataToCharts(
        dataArray,
        PIE_CHART_DATA_FUNC_PARAM,
        year
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
        <Grid container spacing={PIE_CHART_MAIN_GRID_CONT_SPACING}>
            <Grid
                sm={PIE_CHART_GRID_SIZE_6}
                md={PIE_CHART_GRID_SIZE_6}
                lg={PIE_CHART_GRID_SIZE_6}
            >
                <Typography sx={pieChartTypStyle} variant={PIE_CHART_TYP_VAR}>
                    {PIE_CHART_TYP_TXT}
                </Typography>
            </Grid>
            <Grid
                sm={PIE_CHART_GRID_SIZE_6}
                md={PIE_CHART_GRID_SIZE_6}
                lg={PIE_CHART_GRID_SIZE_6}
            >
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
                <Grid
                    sm={PIE_CHART_GRID_SIZE_12}
                    md={PIE_CHART_GRID_SIZE_12}
                    lg={PIE_CHART_GRID_SIZE_12}
                    xl={PIE_CHART_GRID_SIZE_12}
                >
                    <Chart
                        width={PIE_CHART_CHART_WIDTH}
                        height={PIE_CHART_CHART_HEIGHT}
                    >
                        <Pie
                            isAnimationActive={true}
                            dataKey={PIE_CHART_DATA_KEY}
                            nameKey={PIE_CHART_NAME_KEY}
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            startAngle={PIE_CHART_START_ANGLE}
                            endAngle={PIE_CHART_END_ANGLE}
                            data={dataPerMonth}
                            cx={PIE_CHART_CX}
                            cy={PIE_CHART_CY}
                            innerRadius={PIE_CHART_PIE_INNER_RADIUS}
                            outerRadius={PIE_CHART_PIE_OUTER_RADIUS}
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
