import { useState, useEffect } from "react";
import {
    PieChart as Chart,
    Pie,
    Sector,
    ResponsiveContainer,
    Cell,
    Legend,
} from "recharts";

import { DataToPieChart, Rows } from "../../Interfaces/interfaces";
import { getExpanseData, createDataToCharts } from "../../utils/clientUtils";

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
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
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
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#999"
            >{`Amount: ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

function PieChart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dataArray, setDataArray] = useState<Rows[]>([]);

    useEffect(() => {
        getExpanseData(setDataArray);
    }, []);

    const dataToPieChart = createDataToCharts(
        dataArray,
        "pie"
    ) as DataToPieChart[];
    const dataPerMonth = dataToPieChart.filter((item) => item.month === 8);

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#586ebf",
        "#9745a1",
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <Chart width={400} height={400}>
                <Pie
                    isAnimationActive={true}
                    dataKey="amount"
                    nameKey="category"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    startAngle={0}
                    endAngle={360}
                    data={dataPerMonth}
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius={60}
                    outerRadius={150}
                    fill="#82ca9d"
                    onMouseEnter={onPieEnter}
                    label
                >
                    {dataPerMonth.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Legend />
            </Chart>
        </ResponsiveContainer>
    );
}

export default PieChart;
