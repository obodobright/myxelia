import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const ViewCard = ({ title, analytics }) => {
  return (
    <Flex
      flex={1}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      borderRadius={8}
      py={3}
      px={6}
      border="1px solid #F5F5F5"
    >
      <Heading color="#191919">{analytics}</Heading>
      <Text color="#606060" fontSize={14}>
        {title}
      </Text>
    </Flex>
  );
};
