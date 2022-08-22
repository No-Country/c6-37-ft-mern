import {
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

const DataTable = ({ title, columns, rows, handleSelect }) => {

  function handleClick(e) {
    console.log(e);
  }

  return (
    <Stack>
      {title && (
        <Heading as="h3" fontSize="24px" py={4}>
          {title}
        </Heading>
      )}
      <TableContainer maxH="450px" overflowY="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.key}>{column.title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr
                key={index}
                cursor="pointer"
                _hover={{ bg: '#EEEEEE' }}
                onClick={
                  ()=>handleSelect(row)
                }
              >
                {/* RECORRE CADA OBJETO, COMO SI FUERA UN ARRAY, ASI SE CONVIERTE EN UNA TABLA DINAMICA */}
                {Object.keys(row).map((i) => (
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
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DataTable;
