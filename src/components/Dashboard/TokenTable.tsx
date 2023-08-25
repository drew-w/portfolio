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
  setColumnVisibility: (arg: {}) => void
}

export const TokenTable = ({
  data,
  caption,
  columns,
  columnVisibility,
  setColumnVisibility
}: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility
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
            {table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
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
