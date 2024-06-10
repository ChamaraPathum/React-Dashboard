import { BarchartBox } from "../../components/barchartBox/BarchartBox";
import BigChart from "../../components/bigchart/BigChart";
import ChartBox from "../../components/chartBox/ChartBox";
import PichartBox from "../../components/pichartBox/PichartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
// import "./Home.scss";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PichartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChart />
      </div>
      <div className="box box8">
        <BarchartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarchartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
