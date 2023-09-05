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
  TableContainer
} from '@chakra-ui/react'
//Data
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

//Types
interface Props {
  data: any
  caption: string
  columns: any[]
  columnVisibility: {}
  onPageResize: (arg: {}) => void
  rowSelection: {}
  onRowSelect: (arg: {}) => void
  onTableSelect: (table: 'All Projects' | 'My Projexts' | string) => void
  tableSelect: 'All Projects' | 'My Projexts' | string | undefined
}

export const TokenTable = ({
  data,
  caption,
  columnVisibility,
  onPageResize,
  rowSelection,
  onRowSelect,
  columns,
  onTableSelect,
  tableSelect
}: Props) => {
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
  console.log(rowSelection)

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
          <TableCaption p='0' placement='top'>
            {caption}
          </TableCaption>
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
              const isSelected = row.getIsSelected() && tableSelect === caption
              const canSelect = row.getCanSelect()

              const clickHandler = canSelect
                ? row.getToggleSelectedHandler()
                : () => null

              return (
                <Tr
                  key={row.id}
                  onClick={e => {
                    onTableSelect(caption)
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
