import { Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPetData, setPetData } from './../../../../redux/features/petSlice';
import ButtonsForm from './../../editable/ButtonsForm';
import EditCard from './EditCard';

function PetProfileEdit() {
  const toast = useToast();
  const petData = useSelector((state) => state.petData);
  const dispatch = useDispatch();
  const [data, setData] = useState(petData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    dispatch(editPetData());
  };

  const handleSubmit = () => {
    dispatch(setPetData(data));
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Flex direction="column" gap="5">
          <EditCard
            handleChange={handleChange}
            data={data.name}
            title="name"
            value={data.name}
          />
          <EditCard
            handleChange={handleChange}
            title="specie"
            data={data.specie}
            value={data.specie}
          />
          <EditCard
            handleChange={handleChange}
            title="size"
            data={data.size}
            value={data.size}
          />
        </Flex>
        <Flex direction="column" gap="5">
          <EditCard
            handleChange={handleChange}
            title="breed"
            data={data.breed}
            value={data.breed}
          />
          <EditCard
            handleChange={handleChange}
            title="birth"
            data={data.birth}
            value={data.birth}
          />
        </Flex>
        <Flex direction="column" gap="5">
          <EditCard
            handleChange={handleChange}
            title="sex"
            data={data.sex}
            value={data.sex}
          />
          <EditCard
            handleChange={handleChange}
            title="weight"
            data={data.weight}
            value={data.weight}
          />
        </Flex>
      </Stack>

      <Stack>
        <Text
          fontWeight="bold"
          textTransform="capitalize"
          fontSize="14px"
          fontFamily="Anek Bangla, sans-serif"
        >
          note:
        </Text>
        <Input
          w="100%"
          h="30px"
          variant="unstyled"
        shadow="lg"
        px="5"
          onChange={handleChange}
          fontSize="15px"
          fontWeight="semibold"
          _placeholder={{ fontWeight: 'light' }}
          placeholder={petData.note ? petData.note : 'note'}
          name="note"
          value={data.note}
        />
      </Stack>

      <ButtonsForm handleCancel={handleCancel} submit={handleSubmit} />
    </>
  );
}

export default PetProfileEdit;
