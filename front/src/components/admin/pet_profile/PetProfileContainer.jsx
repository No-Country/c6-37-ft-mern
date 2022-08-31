import {Stack, VStack} from '@chakra-ui/react'
import PetAppointments from './appointments/PetAppointments'
import OwnerCont from './owner/OwnerCont'
import PetProfile from './pet/PetProfile'

function PetProfileContainer() {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <VStack boxShadow='0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)' gap='10' p='10'>
        <PetProfile />
        <OwnerCont />
        <PetAppointments />
      </VStack>
    </Stack>
  )
}

export default PetProfileContainer