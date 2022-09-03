import { Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import petsHook from '../../../../services/petsHook';
import { editPetData, setPetData } from './../../../../redux/features/petSlice';
import ButtonsForm from './../../editable/ButtonsForm';
import EditCard from './EditCard';

function PetProfileEdit() {
  const {updatePet} = petsHook();
  const toast = useToast();
  const petData = useSelector((state) => state.petData);
  const dispatch = useDispatch();
  const [petInfo, setPetInfo] = useState(petData);

  const handleChange = (e) => {
    setPetInfo({
      ...petInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    dispatch(editPetData());
  };

  const handleSubmit = async () => {
    dispatch(setPetData(petInfo));

    await updatePet(petInfo)
      .then(() =>
        toast({
          title: 'Success',
          description: 'Pet Updated successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <Stack gap="10">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems={{md:"flex-start",base:'center'}}
      >
        <Flex direction={{sm:"row",base:'column'}} gap="5" w='100%'>
          <EditCard
            handleChange={handleChange}
            data={petInfo.name}
            title="name"
            value={petInfo.name}
          />{' '}
          <EditCard
            handleChange={handleChange}
            title="breed"
            data={petInfo.breed}
            value={petInfo.breed}
          />
          <EditCard
            handleChange={handleChange}
            title="specie"
            data={petInfo.specie}
            value={petInfo.specie}
          />
        </Flex>
        <Flex direction={{sm:"row",base:'column'}} gap="5" w='100%'>
          <EditCard
            handleChange={handleChange}
            title="sex"
            data={petInfo.sex}
            value={petInfo.sex}
          />
          <EditCard
            handleChange={handleChange}
            title="birth"
            data={petInfo.birth}
            value={petInfo.birth}
          />{' '}
          <EditCard
            handleChange={handleChange}
            title="size"
            data={petInfo.size}
            value={petInfo.size}
          />
        </Flex>
        <Flex gap="5">
          <EditCard
            handleChange={handleChange}
            title="weight"
            data={petInfo.weight}
            value={petInfo.weight}
          />
        </Flex>
        <Stack w="100%">
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
            maxW="450px"
            h="30px"
            variant="unstyled"
            shadow="lg"
            px="5"
            onChange={handleChange}
            fontSize="15px"
            _placeholder={{ fontWeight: 'light' }}
            placeholder={petData.note ? petData.note : 'note'}
            name="note"
            value={petInfo.note}
          />
        </Stack>
      </Stack>

      <ButtonsForm handleCancel={handleCancel} submit={handleSubmit} />
    </Stack>
  );
}

export default PetProfileEdit;
