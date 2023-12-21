import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const AnalyticsCard = ({ subject, theme, amount, type }) => {
  return (
    <Box bg="#FFF" py={3} px={3} borderRadius={8} border="1px solid #E4E4E4">
      <Heading mb={1} as="h5" color={theme} size={"md"}>
        ₦{amount}
      </Heading>
      <Flex alignItems="center" gap={1}>
        <Text fontSize={12} color=" #3D3D3D" fontWeight={500}>
          {subject}
        </Text>
        {type === "withdrawal" ? (
          <img src="/svg/topupred.svg" alt="" />
        ) : (
          <img src="/svg/topupgreen.svg" alt="" />
        )}
        <Text fontSize={12} color={type == "withdrawal" ? theme : "#12D8A0"} fontWeight={400}>
          0%{" "}
        </Text>
      </Flex>
    </Box>
  );
};
