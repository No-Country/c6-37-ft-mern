import React from "react";
import { Flex, Stack, Box } from "@chakra-ui/react";
import UserChip from "./UserChip";
import PetsContainer from "./PetsContainer";
import PreviousShifts from "./PreviousShifts";
import NextShifts from "./NextShifts";

const Dashboard = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      margin="auto 0"
      pt="160px"
    >
      <Stack w="900px" display="flex" justifyContent="center">
        <Box width="440px" marginLeft="6px">
          <UserChip />
        </Box>

        <Box
          justifyContent="center"
          w="calc(100%/2 -10px)"
          display="flex"
          gap="10px"
        >
          <Flex
            boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
            width="440px"
            pb={0}
            h='100%'
            direction="column"
            marginTop='2px'

          >
            <Box>
              <PetsContainer />
            </Box>
          </Flex>
          <Box>
            <Flex
              boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
              width="440px"
              pb={0}
              direction="column"
            >
              <NextShifts />
            </Flex>
            <Flex
              boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
              width="440px"
              pb={0}
              direction="column"
              marginTop='10px'
            >
              <PreviousShifts />
            </Flex>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Dashboard;
