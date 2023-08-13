import React from 'react'
import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();

  const isDark = currentMode === "Dark";

  return (
    <ChartComponent
      width={width}
      height={height}
      id='chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: isDark ? "#33373E" : "#fff",
        textStyle: { color: isDark ? "#fff" : "#33373E" }
      }}
      background={isDark ? "#33373E" : "#fff"}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked