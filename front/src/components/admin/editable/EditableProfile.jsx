import { Avatar, Flex, Input, Stack, Text } from '@chakra-ui/react'
import EditCard from './EditCard'
import DeleteIcon from './DeleteIcon'
import { useState } from 'react'
import ButtonsForm from './ButtonsForm'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../../redux/features/userSlice'
import { v4 as uuid } from 'uuid'
import useUser from '../../../hooks/useUser'

function EditableProfile() {


  const [userInfo, setUserInfo] = useState(
    {
      id:'',
      name: '',
      lastName: '',
      phone:'',
      email: '',
      address:'',
    }
  )

  // const obj = JSON.parse(localStorage.getItem('user'))
  const obj = useSelector(state => state.userData)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    dispatch(setUserData(userInfo))
  }
// 

  
  return (
    <Stack direction='row' justifyContent='space-around' w='866px'>

      <Stack direction='row'>
        <Avatar size='xl' name={`${userInfo.name}`}/>
        
        <Stack px='6' gap={4}>
          <Flex direction='row' gap={10} >
            <EditCard title='Name' name='name' handleChange={handleChange} logic={obj.name ? `${obj.name}` : `write your ${obj.name}`} />
            <EditCard title='Last Name' name='lastName' handleChange={handleChange} logic={obj.lastName ? `${obj.lastName}` : `write your ${obj.lastName}`}/>
          </Flex>

          <Flex direction='row' gap={10} >
            <EditCard title='Phone Number' name='phone' handleChange={handleChange} logic={obj.phone ? `${obj.phone}` : `write your ${obj.phone}`}/>
            <EditCard title='Email' name='email' handleChange={handleChange} logic={obj.email ? `${obj.email}` : `write your ${obj.email}`} />
          </Flex>

          <Flex direction='column'>
            <Text fontSize='14px' fontWeight='bold' fontFamily='Anek Bangla, sans-serif'>Address:</Text>
            <Input placeholder={obj.address ? `${obj.address}` : `write your ${obj.address}`} px='5' name='address' onChange={handleChange} variant='unstyled' shadow='lg' maxW='490px' h='30px' rounded={0} _placeholder={{fontSize: '12px'}} />
          </Flex>
          <ButtonsForm submit={handleSubmit} />
        </Stack>
      </Stack>

      <DeleteIcon />
    </Stack>
  )
}

export default EditableProfile