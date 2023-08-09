'use client'
import styles from './Test.module.css'
import { useListProjects } from '@hooks/projects'
import logo from '@assets/debtlogo.svg'
import Image from 'next/image'
import { Stack, Box, Flex, Text, Button } from '@chakra-ui/react'

export default function New () {
  const projectsQuery = useListProjects({}),
    { data: projects } = projectsQuery
  console.log(projects)

  const myProject = projects?.find(
    p => p.address === '13894 S Bangerter Pkwy, Draper, UT 84020'
  )
  console.log(myProject)
  return (
    <Box px='50px'>
      <Flex
        as='header'
        bg='#fff'
        justify='space-between'
        align='center'
        h='100px'
      >
        <Image src={logo} height={30} alt='debt' />
        <Stack align='center' spacing={10} direction='row' h='full'>
          <Button variant='link' color='black'>
            Connect
          </Button>
          <Button variant='link' color='black'>
            About
          </Button>
          <Button variant='link' color='black'>
            Launch
          </Button>
        </Stack>
      </Flex>

      {projectsQuery.isLoading && <div>loading...</div>}
      {projectsQuery.isError && <div>you done messed up</div>}
      {projectsQuery.isSuccess && (
        <Box w='full'>
          <Image
            src={myProject?.coverImage!!}
            alt='cover'
            layout='responsive'
            width='1000'
            height={750}
          />
        </Box>
      )}
    </Box>
  )
}
