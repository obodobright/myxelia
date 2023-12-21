import { Box } from "@chakra-ui/react";

export const BoxLayout = ({ children }) => {
  return (
    <Box padding={4} bg="#FFF" mb={4} boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)">
      {children}
    </Box>
  );
};
