import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { ChartsHeader } from "../components";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const WawasanPengguna = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {/* <Helmet>
        <title>Wawasan Pengguna | Happypets</title>
      </Helmet> */}

      <ChartsHeader
        category="Wawasan Pengguna & Toko"
        title="Statistik Tahunan Pengguna & Toko Aktif"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default WawasanPengguna;
