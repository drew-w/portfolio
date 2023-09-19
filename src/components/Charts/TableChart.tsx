//Chakra
import { Text } from '@chakra-ui/react'

//Data
import { tokenValues } from '@hooks/tokens'

//Style UI
import { LineChart, Line } from 'recharts'

//Types
import { Token } from '@./types/tokens'
interface Props {
  token: Token
}

export const TableChart = ({ token }: Props) => {
  const { primaryColor } = token.uiConfig
  return (
    <LineChart width={60} height={50} data={tokenValues}>
      <Line
        isAnimationActive={false}
        type='monotone'
        dataKey='tokenPrice'
        stroke={primaryColor}
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  )
}
