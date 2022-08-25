import { Flex, Input, Stack, Text, usePinInputDescendant } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPetData, setPetData } from '../../../../redux/features/petSlice'
import ButtonsForm from '../../editable/ButtonsForm'
import EditCard from './EditCard'
import {v4 as uuid} from 'uuid'


function PetProfileEdit() {

  
  const [data, setData] = useState({
    id:'',
    name:'',
    specie:'',
    size:'',
    breed:'',
    birth:'',
    sex:'',
    weight:'',
    imgUrl:'',
    note:'',
    editable: false,
  })
  
  const petData = useSelector(state => state.petData)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setData({
      ...data,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }


  const handleCancel = () => {
    dispatch(editPetData())
  }

  const handleSubmit = () => {
    dispatch(setPetData(data))
  }

  return (
    
      <>
        <Stack direction='row' justifyContent='space-between' alignItems='center' pt='16'>
          <Flex direction='column'>
            <EditCard handleChange={handleChange} data={petData.name} label='name'/>
            <EditCard handleChange={handleChange} label='specie' data={petData.specie} />
            <EditCard handleChange={handleChange} label='size' data={petData.size} />
          </Flex>
          <Flex direction='column'>
            <EditCard handleChange={handleChange} label='breed' data={petData.breed} />
            <EditCard handleChange={handleChange} label='birth' data={petData.birth} />
          </Flex>
          <Flex direction='column'>
            <EditCard handleChange={handleChange} label='sex' data={petData.sex} />
            <EditCard handleChange={handleChange} label='weight' data={petData.weight} />
          </Flex>
        </Stack>

        <Stack>
          <Text fontWeight='bold' textTransform='capitalize' fontSize='14px' fontFamily='Anek Bangla, sans-serif' >note:</Text>
          <Input onChange={handleChange} fontSize='15px' fontWeight='semibold' _placeholder={{fontWeight:'light'}} placeholder={petData.note ? petData.note : 'note'} name='note' />
        </Stack>

        <ButtonsForm handleCancel={handleCancel} submit={handleSubmit} />
      </>
    
  )
}

export default PetProfileEdit