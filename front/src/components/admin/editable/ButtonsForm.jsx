import { Button, Stack } from '@chakra-ui/react';
import React from 'react';

const ButtonsForm = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap="10px"
    >
      <Button
        onClick={props.handleCancel}
        w="108px"
        h="29px"
        borderRadius={50}
        border="2px solid #0B8CBF"
        bg="transparent"
        color="#0B8CBF"
      >
        Cancel
      </Button>
      <Button
        onClick={props.submit}
        w="108px"
        h="29px"
        borderRadius={50}
        bg="#0B8CBF"
        color="#fff"
        _hover={{ bg: 'blue.600' }}
      >
        Edit
      </Button>
    </Stack>
  );
};

export default ButtonsForm;
