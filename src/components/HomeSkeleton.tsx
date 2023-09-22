//Chakra
import { Skeleton, Stack, HStack } from '@chakra-ui/react'

export const HomeSkeleton = () => {
  return (
    <Stack spacing={4}>
      <HStack
        spacing='20px'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <Skeleton
          startColor='skeleton-start'
          endColor='skeleton-end'
          borderRadius='10px'
          w='320px'
          h='280px'
        />
        <Skeleton
          startColor='skeleton-start'
          endColor='skeleton-end'
          borderRadius='10px'
          w='320px'
          h='280px'
        />
        <Skeleton
          startColor='skeleton-start'
          endColor='skeleton-end'
          borderRadius='10px'
          w='320px'
          h='280px'
        />
      </HStack>
      <Stack spacing={4}>
        <Skeleton
          startColor='skeleton-start'
          endColor='skeleton-end'
          borderRadius='10px'
          w={{ base: '320px', md: '320px', lg: '1000px' }}
          h='300px'
        />
      </Stack>
    </Stack>
  )
}
