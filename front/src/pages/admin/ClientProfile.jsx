import { Stack } from '@chakra-ui/react'
import React from 'react'
import UserProfileContainer from '../../components/admin/UserProfileContainer'

function ClientProfile() {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
      <UserProfileContainer />

    </Stack>
  )
}

export default ClientProfile