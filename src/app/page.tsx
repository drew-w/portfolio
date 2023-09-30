'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'

export default function RootPage () {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  })
  return (
    <Flex h='80vh' w='100vw' as='main'>
      <Center w='full'></Center>
    </Flex>
  )
}
