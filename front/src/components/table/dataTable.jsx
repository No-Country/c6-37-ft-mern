import {
  Center,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const DataTable = ({
  title,
  columns,
  rows,
  handleSelect,
  isClickable,
  maxH = '450px',
}) => {
  return (
    <Stack>
      {title && (
        <Heading as="h3" fontSize="24px" py={4}>
          {title}
        </Heading>
      )}
      <TableContainer maxH={maxH} overflowY="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.key}>{column.title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.length > 0 &&
              rows.map((row, index) => (
                <Tr
                  key={index}
                  cursor={isClickable ? 'pointer' : undefined}
                  _hover={isClickable ? { bg: '#EEEEEE' } : undefined}
                  onClick={isClickable ? () => handleSelect(row) : undefined}
                >
                  {columns.map((column) =>
                    Object.keys(row).map(
                      (i) =>
                        i === column.key && (
                          <Td key={i}>
                            <Text
                              fontFamily="Anek Bangla, sans-serif"
                              fontWeight="bold"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              maxW="160px"
                            >
                              {row[i]}
                            </Text>
                          </Td>
                        )
                    )
                  )}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      {!(rows.length > 0) && (
        <Center w="100%" h="200px">
          <Text opacity="0.5">There is not data to show</Text>
        </Center>
      )}
    </Stack>
  );
};

export default DataTable;
