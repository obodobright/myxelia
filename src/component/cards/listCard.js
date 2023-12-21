import { Box, Flex, Text } from "@chakra-ui/react";

export const ListCard = ({ theme }) => {
  return (
    <Flex alignItems="center" gap={3}>
      <Flex
        borderRadius={8}
        justifyContent="center"
        alignItems="center"
        width={67}
        height={68}
        backgroundColor={"#F5F5F5"}
        border={`1px solid ${theme}`}
      >
        <img src="/svg/placeholder.svg" alt="" />
      </Flex>
      <Text color="#191919" fontWeight={600} fontSize={16}>
        None
      </Text>
    </Flex>
  );
};
