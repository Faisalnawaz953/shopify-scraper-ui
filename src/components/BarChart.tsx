import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

export default function BarChart(props: any) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Bar Chart',
      },
    },
  }
  const toMonth = (date: any, i: any) => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const launchedDate = new Date(date)
    const name = month[launchedDate.getMonth()]

    return name
  }

  const data = {
    labels: props?.latestLaunchedProducts?.map((item: any, i: any) => toMonth(item.DATE, i)),

    datasets: [
      {
        label: 'count',
        data: props?.latestLaunchedProducts?.map((item: any) => item.COUNT),
        backgroundColor: '#61DAFB',
        barThickness: 50,
      },
    ],
  }
  return <Bar options={options} data={data} className="" />
}
