//Chakra
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useBreakpointValue,
  Stack
} from '@chakra-ui/react'

//Data
import { useEffect, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import {
  allProjectsColumns,
  setAllProjectsColumnsVisibility,
  myProjectsColumns,
  setMyProjectsColumnsVisibility
} from '@app/home/data'
import { Token } from '@./types/tokens'

//Types
interface Props {
  data: {
    myTokens: Token[]
    allTokens: Token[]
  }
  rowSelection: {}
  onRowSelect: (arg: {}) => void
  onTableSelect: (table: 'all' | 'my' | string) => void
  tableSelect: 'all' | 'my' | string | undefined
}

export const TokenTable = ({
  data: { allTokens, myTokens },
  rowSelection,
  onRowSelect,
  onTableSelect,
  tableSelect
}: Props) => {
  const [allColumnVisibility, setAllColumnVisibility] = useState({})
  const [myColumnVisibility, setMyColumnVisibility] = useState({})

  const allTokensTable = useReactTable({
    data: allTokens,
    columns: allProjectsColumns(tableSelect === 'all'),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: allColumnVisibility,
      rowSelection
    },
    onColumnVisibilityChange: setAllColumnVisibility,
    onRowSelectionChange: onRowSelect,
    enableMultiRowSelection: false
  })

  const myTokensTable = useReactTable({
    data: myTokens,
    columns: myProjectsColumns(tableSelect === 'all'),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: myColumnVisibility,
      rowSelection
    },
    onColumnVisibilityChange: setMyColumnVisibility,
    onRowSelectionChange: onRowSelect,
    enableMultiRowSelection: false
  })

  const screenSize =
    useBreakpointValue(
      { base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      { fallback: 'lg' }
    ) || 'lg'

  useEffect(() => {
    setAllProjectsColumnsVisibility(setAllColumnVisibility, screenSize)
    setMyProjectsColumnsVisibility(setMyColumnVisibility, screenSize)
  }, [screenSize])

  return (
    <Stack as='section' direction='column' spacing='20px' w='full'>
      {myTokens.length > 0 && (
        <TableContainer
          px='15px'
          bg='box-bg-primary'
          borderRadius='10px'
          shadow='box-shadow-primary'
        >
          <Table>
            <TableCaption p='0' placement='top'>
              My Projects
            </TableCaption>
            <Thead>
              {myTokensTable.getHeaderGroups().map(headerGroup => (
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
              {myTokensTable.getRowModel().rows.map(row => {
                const isSelected = row.getIsSelected() && tableSelect === 'my'
                const canSelect = row.getCanSelect()

                const clickHandler = canSelect
                  ? row.getToggleSelectedHandler()
                  : () => null

                return (
                  <Tr
                    key={row.id}
                    onClick={e => {
                      onTableSelect('my')
                      clickHandler(e)
                    }}
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
              {myTokensTable.getFooterGroups().map(footerGroup => (
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
      )}
      <TableContainer
        px='15px'
        bg='box-bg-primary'
        borderRadius='10px'
        shadow='box-shadow-primary'
      >
        <Table>
          <TableCaption p='0' placement='top'>
            All Projects
          </TableCaption>
          <Thead>
            {allTokensTable.getHeaderGroups().map(headerGroup => (
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
            {allTokensTable.getRowModel().rows.map(row => {
              const isSelected = row.getIsSelected() && tableSelect === 'all'
              const canSelect = row.getCanSelect()

              const clickHandler = canSelect
                ? row.getToggleSelectedHandler()
                : () => null

              return (
                <Tr
                  key={row.id}
                  onClick={e => {
                    onTableSelect('all')
                    clickHandler(e)
                  }}
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
            {allTokensTable.getFooterGroups().map(footerGroup => (
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
    </Stack>
  )
}
