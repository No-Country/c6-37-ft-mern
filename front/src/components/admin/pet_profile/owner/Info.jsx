import { Avatar, Stack } from '@chakra-ui/react'
import React from 'react'
import InfoCard from './InfoCard'

function Info() {

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
      <Avatar name='john doe' src={owner.img} size='xl' />
      
      <Stack direction='row'>

        <Stack>
          <InfoCard title='name' text={owner.name} />
          <InfoCard  title='phone' text={owner.phone} />
          <InfoCard title='address' text={owner.address} />
        </Stack>

        <Stack>
          <InfoCard title='lastName' text={owner.lastName} />
          <InfoCard title='email' text={owner.email} />
        </Stack>

      </Stack>
    </Stack>
  )
}

export default Info