import { Avatar, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import PetProfileEdit from './../editable/PetProfileEdit'
import DataContainer from './DataContainer'
import EditToolPet from './EditToolPet'

function PetProfile() {

  const petData = useSelector(state => state.petData)


  return (
    <HStack alignItems='center' justifyContent='center' userSelect='none'>

      <Avatar src={petData.imgUrl} name={petData.name} size='xl' alignSelf='center' />

      <Stack w='616px' direction='column' px='16' justifyContent='center'>

        {
          petData.editable ? <PetProfileEdit /> :
          (<DataContainer petData={petData} />)
        }
        
      </Stack>

        <EditToolPet />

    </HStack>
  )
}

export default PetProfile