import {Stack, VStack} from '@chakra-ui/react'
import ScrollAppointments from '../ScrollAppointments'
import OwnerCont from './owner/OwnerCont'
import PetProfile from './pet/PetProfile'

function PetProfileContainer() {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <VStack w='932px' gap='10' boxShadow='dark-lg' py='10'>
        <PetProfile />
        <OwnerCont />
        <ScrollAppointments />
      </VStack>
    </Stack>
  )
}

export default PetProfileContainer