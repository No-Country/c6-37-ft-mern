import { Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function EditCard(props) {
  return (
    <Stack>
      <Text
        textTransform="capitalize"
        fontWeight="bold"
        fontSize="14px"
        fontFamily="Anek Bangla, sans-serif"
      >
        {props.title}
      </Text>
      <Input
        maxW="200px"
        h="30px"
        px="5"
        fontSize="14px"
        _placeholder={{ fontSize: '12px' }}
        placeholder={props.data ? props.data : props.label}
        name={props.title}
        variant="unstyled"
        shadow="lg"
        rounded={0}
        value={props.value}
        onChange={props.handleChange}
      />
    </Stack>
  );
}

export default EditCard;
