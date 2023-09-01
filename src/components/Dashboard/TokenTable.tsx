//Chakra
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Image,
  Text,
  Box,
  Button
} from '@chakra-ui/react'
//Data
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper
} from '@tanstack/react-table'
import { formatCurrency, formatDelta } from '@utils/format'
import BigNumber from 'bignumber.js'

//Types
import { Token } from '@./types/tokens'
interface Props {
  data: any
  caption: string
  columns: any[]
  columnVisibility: {}
  onPageResize: (arg: {}) => void
  rowSelection: {}
  onRowSelect: (arg: {}) => void
}

export const TokenTable = ({
  data,
  caption,
  columnVisibility,
  onPageResize,
  rowSelection,
  onRowSelect
}: Props) => {
  const columnHelper = createColumnHelper<Token>()

  const columns = [
    columnHelper.accessor(row => row, {
      id: 'name',
      cell: info => {
        const data = info.getValue()
        const { row } = info
        const isSelected = row.getIsSelected()
        return (
          <Stack
            spacing='10px'
            align='center'
            direction='row'
            maxW='175px'
            w='full'
          >
            <Image src={data.uiConfig.tokenLogo} w='30px' h='30px' />
            <Flex direction='column'>
              <Text as='h3' fontWeight={600} fontSize='15px'>
                {data.uiConfig.name}
              </Text>
              <Stack
                direction='row'
                spacing='8px'
                align='center'
                fontWeight={500}
                fontSize='12px'
              >
                <Text>{data.name}</Text>
                <Box
                  w='4px'
                  h='4px'
                  borderRadius='full'
                  bg={isSelected ? 'box-bg-primary' : 'box-bg-secondary'}
                />
                <Text>{data.id}</Text>
              </Stack>
            </Flex>
          </Stack>
        )
      },
      header: () => (
        <Flex as='span' w='full' p='0'>
          Name
        </Flex>
      )
    }),
    columnHelper.accessor(row => parseFloat(row.marketValue24HrsAgo) * 100, {
      id: 'nftPrice',
      header: 'NFT Price',
      cell: ({ getValue }) => (
        <Text as='h3'>
          {getValue().toLocaleString('en-US', {
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
        const data = info.getValue()
        const { name, marketValueNow } = data
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
        const data = info.getValue()
        const { marketValueNow, marketValue24HrsAgo } = data

        const { delta, change } = formatDelta(
          marketValueNow,
          marketValue24HrsAgo
        )

        return (
          <Flex as='span' direction='column'>
            <Text>
              ${new BigNumber(marketValueNow).decimalPlaces(6).toString()}
            </Text>
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
        //todo this button needs to do something
        const data = info.getValue()
        const { row } = info
        const isSelected = row.getIsSelected()
        return (
          <Button variant={isSelected ? 'secondary' : 'primary'}>
            Buy More
          </Button>
        )
      }
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      rowSelection
    },
    onColumnVisibilityChange: onPageResize,
    onRowSelectionChange: onRowSelect,
    enableMultiRowSelection: false
  })

  return (
    <Flex
      as='section'
      direction='column'
      px='15px'
      w='full'
      bg='box-bg-primary'
      borderRadius='10px'
      shadow='box-shadow-primary'
    >
      <TableContainer>
        <Table>
          <TableCaption placement='top'>{caption}</TableCaption>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => {
              const isSelected = row.getIsSelected()
              const canSelect = row.getCanSelect()

              const clickHandler = canSelect
                ? row.getToggleSelectedHandler()
                : () => null

              return (
                <Tr
                  key={row.id}
                  onClick={clickHandler}
                  color={isSelected ? 'text-secondary' : 'auto'}
                >
                  {row.getVisibleCells().map(cell => (
                    <Td
                      key={cell.id}
                      bg={isSelected ? 'box-bg-secondary' : 'auto'}
                      borderColor={isSelected ? 'box-bg-secondary' : 'auto'}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
          <Tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <Tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  )
}
