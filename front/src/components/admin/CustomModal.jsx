import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import {FiAlertCircle} from 'react-icons/fi'

function CustomModal(props) {

  return (
    <Modal finalFocusRef={props.ref} isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent alignItems='center'>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDirection='column' alignItems='center' gap='5'>
            {!props.logout && <FiAlertCircle size='150px' color='#DC3545'/>}
            <Text>{props.text}</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={props.onClose}>
              {props.cancel}
            </Button>
            <Button colorScheme='blue' onClick={props.onClick}>{props.confirm}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default CustomModal