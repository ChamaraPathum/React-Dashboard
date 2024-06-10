import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchartBox.scss";

type Props = {
  title: string;
  color: string;
  datakey: string;
  chartData: object[];
};

export const BarchartBox = (props: Props) => {
  return (
    <div className="barchartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.datakey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
