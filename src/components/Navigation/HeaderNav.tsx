'use client'
//Chakra
import { Box, Flex } from '@chakra-ui/react'

//Data
import { useRouter, usePathname } from 'next/navigation'

export const HeaderNav = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentPage = pathname.substring(1)

  const options = ['home', 'projects', 'about']
  return (
    <Flex
      justify='space-between'
      borderRadius={25}
      shadow='box-shadow-primary'
      borderColor='border-primary'
      borderWidth={1}
    >
      {options.map(value => {
        return (
          <Box
            onClick={() => router.push(value)}
            as='label'
            key={value}
            fontSize={14}
            fontWeight={500}
            cursor='pointer'
            borderRadius={25}
            h='42px'
            transitionProperty='background-color'
            transitionDuration='200ms'
            bg={currentPage === value ? 'brand-green' : 'none'}
            color={currentPage === value ? 'text-inverse' : 'auto'}
            px='24px'
            py='11px'
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Box>
        )
      })}
    </Flex>
  )
}
