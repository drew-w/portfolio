'use client'
//Chakra
import { useRadioGroup, useRadio, Box, Flex } from '@chakra-ui/react'

//Data
import { useRouter, usePathname } from 'next/navigation'

//Types
type TimePeriod = 'home' | 'about' | 'history' | string

export const HeaderNav = () => {
  const options = ['home', 'about', 'history']
  const router = useRouter()
  const pathname = usePathname()
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: pathname.substring(1),
    onChange: router.push
  })

  const group = getRootProps()
  return (
    <Flex
      justify='space-between'
      {...group}
      borderRadius={25}
      shadow='box-shadow-primary'
      borderColor='radio-border'
      borderWidth={1}
    >
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </RadioCard>
        )
      })}
    </Flex>
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
          bg: 'radio-bg',
          color: 'radio-text'
        }}
        px='24px'
        py='11px'
      >
        {props.children}
      </Box>
    </Box>
  )
}
