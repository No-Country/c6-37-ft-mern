import { Avatar, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from "react-redux";
import InfoCard from './InfoCard'

function Info() {

  const state = useSelector(state => state.userData)


  let owner = {
    name: 'John',
    lastName:'Doe',
    phone:'+01 984 039 492',
    email:'johndoe03@gmail.com',
    address:'Contoso Ltd 215 E Tasman CA San Jose',
    img:'https://bit.ly/kent-c-dodds'
  }

  return (
    <Stack direction='row' gap='16'>
      <Avatar name={state.name} src={state.img} size='xl' />
      
      <Stack direction='row'>

        <Stack>
          <InfoCard title='name' text={state.name} />
          <InfoCard  title='phone' text={state.phoneNumber} />
          <InfoCard title='address' text={state.address} />
        </Stack>

        <Stack>
          <InfoCard title='lastName' text={state.lastName} />
          <InfoCard title='email' text={state.email} />
        </Stack>

      </Stack>
    </Stack>
  )
}

export default Info