import { Text, Flex } from "@chakra-ui/react";

export const ProfileHeader = () => {
  return (
    <Flex cursor={"pointer"} alignItems="center" gap={4} justifyContent={"space-between"}>
      <img width={30} src="/img/profile.png" alt="" />
      <Text color="#fff">Ahmed Ali</Text>
      <img src="/svg/arrow.svg" alt="" />
    </Flex>
  );
};
