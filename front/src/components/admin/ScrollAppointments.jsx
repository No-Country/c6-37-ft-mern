import { Heading, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function ScrollAppointments() {

  const dates = [
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet:'Firulais',
      hour: '03:30pm',
      day: '16/08/22'
    }
  ]



  return (
    <Stack px='5' w='866px' maxH='323px'>
      <Heading as='h2' fontWeight='bold' fontSize='24px' fontFamily='Anek Bangla, sans-serif'>Appointments</Heading>
      
      <TableContainer overflowY='scroll'>
        <Table variant='simple'>
        <Thead>
            <Tr>
              <Th><Text fontSize='12px' fontFamily='Anek Bangla, sans-serif' fontWeight='semibold' color='#404040' >Consult</Text></Th>
              <Th><Text fontSize='12px' fontFamily='Anek Bangla, sans-serif' fontWeight='semibold' color='#404040' >Client</Text></Th>
              <Th><Text fontSize='12px' fontFamily='Anek Bangla, sans-serif' fontWeight='semibold' color='#404040' >Pet</Text></Th>
              <Th><Text fontSize='12px' fontFamily='Anek Bangla, sans-serif' fontWeight='semibold' color='#404040' >Hour</Text></Th>
              <Th><Text fontSize='12px' fontFamily='Anek Bangla, sans-serif' fontWeight='semibold' color='#404040' >Day</Text></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              dates.map(el => (
                <Tr key={Math.random()}>
                  <Td><Text fontWeight='bold' fontSize='16px'>{el.consult}</Text></Td>
                  <Td><Text fontWeight='bold' fontSize='16px'>{el.client}</Text></Td>
                  <Td><Text fontWeight='bold' fontSize='16px'>{el.pet}</Text></Td>
                  <Td><Text fontWeight='bold' fontSize='16px'>{el.hour}</Text></Td>
                  <Td><Text fontWeight='bold' fontSize='16px'>{el.day}</Text></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

    </Stack>
  )
}

export default ScrollAppointments