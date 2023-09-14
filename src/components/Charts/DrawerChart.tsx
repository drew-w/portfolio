//Chakra
import {
  Text,
  Stack,
  useRadioGroup,
  useRadio,
  Box,
  Flex
} from '@chakra-ui/react'

//Data
import { tokenValues } from '@hooks/tokens'
import { useState } from 'react'

//Style UI
import { LineChart, Line, Tooltip } from 'recharts'

//Types
import { Token } from '@./types/tokens'
interface Props {
  token: Token
}
type TimePeriod = '24H' | '1W' | '1Y' | 'All' | string

export const DrawerChart = ({ token }: Props) => {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('24H')
  const { brandColor } = token.uiConfig

  const options = ['24H', '1W', '1Y', 'All']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: '24H',
    onChange: setTimePeriod
  })

  const group = getRootProps()
  return (
    <Stack>
      <Flex>
        <LineChart
          width={330}
          height={240}
          data={tokenValues}
          style={{
            backgroundColor: '#0C0C0C',
            borderRadius: 10
          }}
        >
          <Line
            type='monotone'
            dataKey='tokenPrice'
            stroke={brandColor}
            dot={false}
            strokeWidth={3}
          />
          <Tooltip />
        </LineChart>
      </Flex>

      <Flex
        justify='space-between'
        {...group}
        borderRadius={25}
        shadow='box-shadow-primary'
        borderColor='box-border'
        borderWidth={1}
      >
        {options.map(value => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </Flex>
    </Stack>
  )
}

function RadioCard (props: any) {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        fontSize={14}
        fontWeight={500}
        {...checkbox}
        cursor='pointer'
        borderRadius={25}
        h='42px'
        transitionProperty='background-color'
        transitionDuration='200ms'
        _checked={{
          bg: 'box-bg-secondary',
          color: 'text-secondary'
        }}
        px='24px'
        py='11px'
      >
        {props.children}
      </Box>
    </Box>
  )
}
