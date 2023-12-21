import { Heading } from "@chakra-ui/react";

export const TextH6 = ({ text }) => {
  return (
    <Heading fontStyle="normal" fontWeight="500" color="#3D3D3D" fontSize="14px" as="h6">
      {text}
    </Heading>
  );
};
