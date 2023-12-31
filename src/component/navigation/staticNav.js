import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { ProfileHeader } from "../profileHeader";
import MyDrawer from "../drawer";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && <MyDrawer header="Calendar" onOpen={onOpen} isOpen={isOpen} onClose={onClose} />}
      <Box
        backgroundColor="#000"
        px={{
          lg: 12,
          sm: 1,
          md: 12,
          base: 2,
        }}
        py={3}
      >
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Flex flexDirection="column">
            <img src="/img/logo.png" alt="logo-img" />
            <Text mt="-6px" color="#fff">
              For Mainstone
            </Text>
          </Flex>
          <Box>
            <Box
              display={{
                lg: "none",
                sm: "block",
                md: "none",
                base: "block",
              }}
            >
              <ProfileHeader />
            </Box>
            <Flex
              display={{
                lg: "flex",
                sm: "none",
                md: "flex",
                base: "none",
              }}
              gap={6}
            >
              <button>
                <img width={20} src="/svg/addIcon.svg" alt="add-icon" />
              </button>
              <button onClick={onOpen}>
                <img width={20} src="/svg/calendar.svg" alt="calendar-icon" />
              </button>
              <button>
                <img width={20} src="/svg/bell.svg" alt="bell-icon" />
              </button>
              <ProfileHeader />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
