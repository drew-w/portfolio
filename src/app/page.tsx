'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'
import logo from '@assets/debtlogo.svg'
import Image from 'next/image'

export function Page () {
  const router = useRouter()
  useEffect(() => {
    // if (typeof window !== 'undefined')
    router.push('/home')
  })
  return (
    <Flex h='80vh' w='100vw' as='main'>
      <Center w='full'>
        <Image src={logo} height={70} alt='debt' />
      </Center>
    </Flex>
  )
}

export default Page
