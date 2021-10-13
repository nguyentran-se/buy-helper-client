import { Grid } from '@mui/material';
import React, { memo } from 'react';
import Chart from 'react-apexcharts';
const config = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};
const config2 = {
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: 'BuyHelper - Food Analysis (2021 - 2028)',
      align: 'left',
      offsetX: 110,
    },
    xaxis: {
      categories: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB',
        },
        labels: {
          style: {
            colors: '#008FFB',
          },
        },
        title: {
          text: 'Income (thousand crores)',
          style: {
            color: '#008FFB',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396',
        },
        labels: {
          style: {
            colors: '#00E396',
          },
        },
        title: {
          text: 'Operating Cashflow (thousand crores)',
          style: {
            color: '#00E396',
          },
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019',
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: 'Revenue (thousand crores)',
          style: {
            color: '#FEB019',
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  },
  series: [
    {
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ],
};
const config3 = {
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [
      'Customer A',
      'Customer B',
      'Customer C',
      'Customer D',
      'Customer E',
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
  series: [44, 55, 13, 43, 22],
};
const ProviderReport = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Chart
          options={config3.options}
          series={config3.series}
          type="pie"
          //  width="100%"
          height="400"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Chart
          options={config.options}
          series={config.series}
          //  width="100%"
          type="bar"
          height="400"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Chart
          options={config2.options}
          series={config2.series}
          //  width="100%"
          height="400"
        />
      </Grid>
    </Grid>
  );
};

export default memo(ProviderReport);
