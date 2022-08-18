import { VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileContainer from './ProfileContainer'
import ScrollAppointments from './ScrollAppointments'
import ScrollContainer from './ScrollContainer'
import { useSelector } from 'react-redux'
import EditableProfile from './editable/EditableProfile'

function UserProfileContainer() {

  const edit = useSelector(state => state.userData.editable)

  

  return (
    <VStack h='939px' w='925px' boxShadow='dark-lg' my='40' gap='10' py='5'>
      {
        edit ?
        <EditableProfile /> :
        <ProfileContainer />
      }

      <VStack alignItems='center' justifyContent='center' gap='16' maxW='866px'>
        <ScrollContainer />
        <ScrollAppointments />
      </VStack>
    </VStack>
  )
}

export default UserProfileContainer