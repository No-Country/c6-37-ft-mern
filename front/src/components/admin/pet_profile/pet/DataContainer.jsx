import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import DataCard from './DataCard'

function DataContainer({ petData }) {
  return (
      <>
        <Stack direction='row' justifyContent='space-between' alignItems='center' >
          <Flex direction='column'>
            <DataCard label='name' text={petData.name} />
            <DataCard label='specie' text={petData.specie} />
            <DataCard label='size' text={petData.size} />
          </Flex>
          <Flex direction='column'>
            <DataCard label='breed' text={petData.breed} />
            <DataCard label='birth' text={petData.birth} />
          </Flex>
          <Flex direction='column'>
            <DataCard label='sex' text={petData.sex} />
            <DataCard label='weight' text={petData.weight} />
          </Flex>
        </Stack>

          <Stack direction='column' spacing='0px'>
            <Text textTransform='capitalize' fontWeight='bold' fontFamily='Anek Bangla, sans-serif' fontSize='14px' >Note:</Text>
            <Text fontSize='15px' fontWeight='light'>{petData.note}</Text>
          </Stack>
      </>
  )
}

export default DataContainer