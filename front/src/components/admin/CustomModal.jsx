import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'

function CustomModal(props) {

  return (
    <Modal finalFocusRef={props.ref} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.text}</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'mr={3} onClick={props.onClose}>
              {props.cancel}
            </Button>
            <Button colorScheme='blue' >{props.confirm}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default CustomModal