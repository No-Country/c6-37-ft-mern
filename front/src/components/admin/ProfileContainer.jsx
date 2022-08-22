import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DatosCard from "./DatosCard";
import EditTool from "./EditTool";
import { useSelector } from "react-redux";

function ProfileContainer() {


  const state = useSelector(state => state.userData)

  return (
    <Stack direction="row" justifyContent="space-around" w="866px">
      <Stack direction="row">
        <Avatar size="xl" src={state.imgUrl} name={state.name} />

        <Stack px="6">
          <Flex direction="row">
            <DatosCard title="Name" text={state.name} />
            <DatosCard title="Last Name" text={state.lastName} />
          </Flex>

          <Flex direction="row">
            <DatosCard title="Phone Number" text={state.phoneNumber} />
            <DatosCard title="Email" text={state.email} />
          </Flex>

          <Flex direction="column">
            <Text
              fontSize="14px"
              fontWeight="bold"
              fontFamily="Anek Bangla, sans-serif"
            >
              Address:
            </Text>
            <Text fontWeight="light" fontSize="16px">
              {state.address}
            </Text>
          </Flex>
        </Stack>
      </Stack>

      <EditTool />
    </Stack>
  );
}

export default ProfileContainer;
