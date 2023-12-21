import { Box, Container } from "@chakra-ui/react";
import { DynamicNav } from "../component/navigation/dynamicNav";
import { Navbar } from "../component/navigation/staticNav";

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <DynamicNav />
      <Box pt={12} minHeight={"80vh"} width={"100%"} bg="#FBFCFC" px={12}>
        {children}
      </Box>
    </>
  );
};
