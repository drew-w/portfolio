//Chakra
import { Box, Flex, Button, Image, Text, Stack } from '@chakra-ui/react'

//Data
import BigNumber from 'bignumber.js'
import { data as tokenData } from '@hooks/tokens'
import { useMemo, useReducer, useState } from 'react'

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

//Types
import { Token } from '@./types/tokens'
import { formatCurrency, formatDelta } from '@utils/format'
// type Token = {
//   name: string
//   // marketValueNow: string
//   icon: string
// }

export const TokenTable = () => {
  const [data, setData] = useState(() => [
    ...tokenData
    // .filter(t => t.uiConfig.onPancake)
  ])
  const rerender = useReducer(() => ({}), {})[1]
  const columnHelper = createColumnHelper<Token>()

  const columns = [
    columnHelper.accessor(row => row, {
      id: 'name',
      cell: info => {
        const row = info.getValue()
        return (
          <Stack
            spacing='10px'
            align='center'
            direction='row'
            maxW='175px'
            w='full'
            p='15px'
          >
            <Image src={row.uiConfig.tokenLogo} w='30px' h='30px' />
            <Flex direction='column'>
              <Text as='h3' fontWeight={600} fontSize='15px'>
                {row.uiConfig.name}
              </Text>
              <Stack
                direction='row'
                spacing='8px'
                align='center'
                fontWeight={500}
                fontSize='12px'
              >
                <Text>{row.name}</Text>
                <Box
                  w='4px'
                  h='4px'
                  borderRadius='full'
                  bg='box-bg-secondary'
                />
                <Text>{row.id}</Text>
              </Stack>
            </Flex>
          </Stack>
        )
      },
      header: () => <span>Name</span>
      // footer: info => info.column.id
    }),
    columnHelper.accessor(row => parseFloat(row.marketValue24HrsAgo) * 100, {
      id: 'nftPrice',
      header: 'NFT Price',
      cell: info => (
        <Text as='h3' fontSize='15px' fontWeight={600}>
          {info.getValue().toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </Text>
      )
    }),
    columnHelper.accessor(row => row.decimals * 137, {
      id: 'nftsMinted',
      header: 'NFTs Minted',
      cell: info => <Text>{info.getValue().toLocaleString('en-US')}</Text>
    }),
    columnHelper.accessor(row => row.tax, {
      id: 'nftsStaked',
      header: 'NFTs Staked',
      cell: info => (
        <Text>
          {info.getValue() != 0 ? info.getValue().toLocaleString('en-US') : '-'}
        </Text>
      )
    }),
    columnHelper.accessor(row => row, {
      id: 'nftRewardsRate',
      header: 'NFT Rewards Rate',
      cell: info => {
        const row = info.getValue()
        const { name, marketValueNow } = row
        const rate = Math.floor(Math.random() * 5)
        const dollarValue = new BigNumber(marketValueNow).times(rate).toString()

        const formatted = formatCurrency(dollarValue)

        return (
          <Flex as='span' direction='column'>
            <Text as='h3'>
              {rate} {name}
            </Text>
            <Text fontWeight={500} fontSize='12px' color='text-gray'>
              {formatted}
            </Text>
          </Flex>
        )
      }
    }),
    columnHelper.accessor(row => row, {
      id: 'marketPrice',
      header: 'Market Price',
      cell: info => {
        const row = info.getValue()
        const { marketValueNow, marketValue24HrsAgo } = row

        const { delta, change } = formatDelta(
          marketValueNow,
          marketValue24HrsAgo
        )

        return (
          <Flex as='span' direction='column'>
            <Text>${marketValueNow}</Text>
            <Text
              fontWeight={500}
              fontSize='12px'
              color={
                change === 'negative'
                  ? 'text-red'
                  : change === 'positive'
                  ? 'text-green'
                  : 'text-gray'
              }
            >
              {delta}
            </Text>
          </Flex>
        )
      }
    }),
    columnHelper.accessor(row => row, {
      id: 'buyMoreGraph',
      header: '',
      cell: info => {
        const row = info.getValue()
        return <Button variant='primary'>Buy More</Button>
      }
    })
    // columnHelper.accessor(row => row.uiConfig.tokenLogo, {
    //   id: 'icon',
    //   cell: info => {
    //     console.log('onfo??', info)
    //     return <Image w='50px' src={info.getValue()} />
    //   }
    // })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Flex
      as='section'
      direction='column'
      py='20px'
      w='full'
      bg='box-bg-primary'
      borderRadius='10px'
      shadow='box-shadow-primary'
    >
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <Button variant='primary' onClick={() => rerender()} w='sm'>
        rerender
      </Button>
    </Flex>
  )
}
