import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileContainer from './ProfileContainer'
import ScrollAppointments from './ScrollAppointments'
import ScrollContainer from './ScrollContainer'
import { useSelector } from 'react-redux'
import EditableProfile from './editable/EditableProfile'

function UserProfileContainer() {

  const edit = useSelector(state => state.userData.editable);  

  return (
    <Stack boxShadow='0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)' gap='10' p={{lg:'10', base:'5'}}>
      {
        edit ?
        <EditableProfile /> :
        <ProfileContainer />
      }

      <VStack alignItems='center' justifyContent='center' gap='10' w='100%' >
        <ScrollContainer />
        <ScrollAppointments />
      </VStack>
    </Stack>
  )
}

export default UserProfileContainer