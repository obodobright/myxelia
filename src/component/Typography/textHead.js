import { Heading } from "@chakra-ui/react";

export const TextHead = ({ text }) => {
  return (
    <Heading fontWeight="600" color="#191919" fontSize="20px" as="h4" size="lg">
      {text}
    </Heading>
  );
};
