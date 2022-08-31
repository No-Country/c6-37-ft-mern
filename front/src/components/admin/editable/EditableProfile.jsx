import { Avatar, Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import EditCard from './EditCard';
import DeleteIcon from './DeleteIcon';
import { useState } from 'react';
import ButtonsForm from './ButtonsForm';
import { useDispatch, useSelector } from 'react-redux';
import { setEditable, setUserData } from './../../../redux/features/userSlice';
import { updateClient } from '../../../services/clients';

function EditableProfile() {
  const toast = useToast();
  const obj = useSelector((state) => state.userData);
  const [userInfo, setUserInfo] = useState(obj);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    dispatch(setUserData(userInfo));

    await updateClient(userInfo)
      .then(() =>
        toast({
          title: 'Success',
          description: 'User Updated successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        })
      )
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    dispatch(setEditable());
  };

  return (
    <Stack direction="row" justifyContent="center" gap="20" px="10">
      <Stack direction="row" gap="6">
        <Avatar size="xl" name={`${userInfo.name}`} />

        <Stack gap="2">
          <Flex direction="row" gap="6">
            <EditCard
              title="Name"
              name="name"
              handleChange={handleChange}
              logic={
                userInfo.name
                  ? `${userInfo.name}`
                  : `write your ${userInfo.name}`
              }
              value={userInfo.name}
            />
            <EditCard
              title="Last Name"
              name="lastName"
              handleChange={handleChange}
              logic={
                userInfo.lastName
                  ? `${userInfo.lastName}`
                  : `write your ${userInfo.lastName}`
              }
              value={userInfo.lastName}
            />
          </Flex>

          <Flex direction="row" gap="6">
            <EditCard
              title="Phone Number"
              name="phoneNumber"
              handleChange={handleChange}
              logic={
                userInfo.phoneNumber
                  ? `${userInfo.phoneNumber}`
                  : `write your ${userInfo.phoneNumber}`
              }
              value={userInfo.phoneNumber}
            />
            <EditCard
              title="Email"
              name="email"
              handleChange={handleChange}
              logic={
                userInfo.email
                  ? `${userInfo.email}`
                  : `write your ${userInfo.email}`
              }
              value={userInfo.email}
              isDisable={true}
            />
          </Flex>

          <Flex direction="column">
            <Text
              fontSize="14px"
              fontWeight="bold"
              fontFamily="Anek Bangla, sans-serif"
            >
              Address:
            </Text>
            <Input
              placeholder={
                userInfo.address
                  ? `${userInfo.address}`
                  : `write your ${userInfo.address}`
              }
              px="5"
              name="address"
              onChange={handleChange}
              variant="unstyled"
              shadow="lg"
              h="30px"
              rounded={0}
              _placeholder={{ fontSize: '12px' }}
              value={userInfo.address}
            />
          </Flex>
          <ButtonsForm handleCancel={handleCancel} submit={handleSubmit} />
        </Stack>
      </Stack>

    </Stack>
  );
}

export default EditableProfile;
