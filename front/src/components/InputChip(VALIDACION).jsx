import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const InputChip = (props) => {
  return (
    <InputGroup>
      <InputLeftElement
        h="30px"
        pointerEvents="none"
        children={props.children}
      />
      <Input
        type={props.type}
        name={props.name}
        id= {props.id}
        h="30px"
        bg="#ffffff"
        borderRadius="full"
        placeholder={props.placeholder}
        fontFamily="Anek Bangla, sans-serif"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </InputGroup>
  );
};

export default InputChip;
