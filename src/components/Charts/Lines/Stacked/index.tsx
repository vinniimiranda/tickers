import React from 'react'
import { Line } from '@nivo/line'
import { PriceInterface } from '../../../../App'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')


type StackedProps = {
  data: PriceInterface[]
}

const Stacked: React.FC<StackedProps> = ({ data }) => (
  <Line
    data={[
      {
        id: new Date().toDateString(),
        data: data.map(({ price, createdAt }) => ({ x: moment(createdAt).format('L'), y: price }))
      },
    ]}
    height={200}
    width={500}
    margin={{ top: 25, right: 40, bottom: 60, left: 60 }}
    // xScale={{ type: 'point' }}
    curve="monotoneX"
    yScale={{ type: 'linear', min: 'auto', stacked: false, reverse: false }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      legend: 'Data',
      legendOffset: 40,

      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 3,
      tickRotation: 0,
      legend: 'Preço',
      tickValues: 5,
      legendOffset: -45,
      legendPosition: 'middle'
    }}

    pointSize={10}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    colors="#1db2db"
    animate
    enablePointLabel

  />
)


export default Stacked
