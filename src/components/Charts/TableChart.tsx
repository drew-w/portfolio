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

export default function TableGraph ({ token }: Props) {
  const { brandColor } = token.uiConfig
  return (
    <LineChart width={60} height={50} data={tokenValues}>
      <Line
        isAnimationActive={false}
        type='monotone'
        dataKey='tokenPrice'
        stroke={brandColor}
        dot={false}
        strokeWidth={3}
      />
    </LineChart>
  )
}
