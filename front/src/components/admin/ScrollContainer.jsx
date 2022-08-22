import { Heading, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const ScrollContainer = () => {

  const pets = [
    {
      name:'Firulais',
      owner:'John Doe',
      specie:'Dog',
      breed:'Jack Russel'
    },
    {
      name:'Dana',
      owner:'Maria Gomez',
      specie:'Cat',
      breed:'Siames'
    },
    {
      name:'Tobby',
      owner:'Andrew Stark',
      specie:'Dog',
      breed:'Bull Terrier'
    },
    {
      name:'Tobby',
      owner:'Andrew Stark',
      specie:'Dog',
      breed:'Bull Terrier'
    },
    {
      name:'Tobby',
      owner:'Andrew Stark',
      specie:'Dog',
      breed:'Bull Terrier'
    },
    {
      name:'Tobby',
      owner:'Andrew Stark',
      specie:'Dog',
      breed:'Bull Terrier'
    }
  ]

  return (
    <Stack w='826px' maxH='223px'>
      <Heading as='h2' fontSize='24px' fontFamily='Anek Bangla, sans-serif' >Pets</Heading>
      <TableContainer overflowY='scroll'>

        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th><Text fontSize='12px' fontWeight='semibold' color='#404040' >Name</Text></Th>
              <Th><Text fontSize='12px' fontWeight='semibold' color='#404040' >Owner</Text></Th>
              <Th><Text fontSize='12px' fontWeight='semibold' color='#404040' >Specie</Text></Th>
              <Th><Text fontSize='12px' fontWeight='semibold' color='#404040' >Breed</Text></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              pets.map(el => (
                <Tr key={Math.random()}>
                  <Td><Text fontSize='16px' fontWeight='bold' >{el.name}</Text></Td>
                  <Td><Text fontSize='16px' fontWeight='bold' >{el.owner}</Text></Td>
                  <Td><Text fontSize='16px' fontWeight='bold' >{el.specie}</Text></Td>
                  <Td><Text fontSize='16px' fontWeight='bold' >{el.breed}</Text></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>

      </TableContainer>
    </Stack>
  )
}

export default ScrollContainer