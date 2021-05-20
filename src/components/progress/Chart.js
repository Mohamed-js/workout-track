import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-charts';

const ProgressChart = () => {
  const [chartData, setChartData] = useState([]);
  const trackedMovements = useSelector((state) => state.user.trackedMovements);

  const options = [''];
  if (trackedMovements) {
    trackedMovements.forEach((movement) => {
      options.push(movement.name);
    });
  }
  const allrecords = useSelector((state) => state.user.records);

  const groups = [];
  if (allrecords) {
    options.forEach((option) => {
      groups.push(
        allrecords.filter((record) => record.movement.name === option).reverse(),
      );
    });
  }

  const data = [];

  groups.forEach((group) => {
    if (group.length !== 0) {
      const groupData = [];
      group.forEach((record) => {
        const date = new Date(record.created_at).toLocaleDateString();
        groupData.push([date, record.movement_count]);
      });

      data.push({ data: groupData });
    }
  });
  useEffect(() => {
    setChartData(data);
  }, []);

  const axes = React.useMemo(() => [
    { primary: true, type: 'ordinal', position: 'bottom' },
    { position: 'left', type: 'linear', stacked: false },
  ]);

  return <>{chartData && <Chart data={chartData} axes={axes} />}</>;
};

export default ProgressChart;
