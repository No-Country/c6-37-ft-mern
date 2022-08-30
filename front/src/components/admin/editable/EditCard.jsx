import { Flex, Input, Stack, Text } from '@chakra-ui/react';

const EditCard = (props) => {
  return (
    <Flex direction='column' w="100%" h="51px">
      <Text
        fontWeight="bold"
        fontFamily="Anek Bangla, sans-serif"
        fontsize="15px"
      >
        {props.title}
      </Text>
      <Input
        fontSize="16px"
        px="5"
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        variant="unstyled"
        shadow="lg"
        h="30px"
        rounded={0}
        placeholder={props.logic}
        _placeholder={{ fontSize: '12px' }}
        disabled={props.isDisable}
      />
    </Flex>
  );
};

export default EditCard;
