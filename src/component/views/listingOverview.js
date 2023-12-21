import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TextHead } from "../Typography/textHead";
import { BoxLayout } from "@/layout/BoxLayout";
import { ListCard } from "../cards/listCard";

export const ListingOverview = () => {
  return (
    <Box flex={"50%"} bg={"#fff"}>
      <BoxLayout>
        <>
          <TextHead text="Listing Overview" />
          <Flex py={3} px={2} gap={6} mt={5}>
            <Box flex={1}>
              <Text width="100%" color="#191919" pb={2} borderBottom="1px solid #E4E4E4">
                Most Viewed
              </Text>
              <Box mt={4}>
                <ListCard theme={"#12D8A0"} />
              </Box>
            </Box>
            <Box flex={1}>
              <Text width="100%" color="#191919" pb={2} borderBottom="1px solid #E4E4E4">
                Most shared
              </Text>
              <Box mt={4}>
                <ListCard theme="#4545FE" />
              </Box>
            </Box>
          </Flex>
          <Flex bg="#F5F5F5" py={3} px={2} borderRadius={8} gap={6} mt={5}>
            <Box flex={1}>
              <Text width="100%" color="#191919" pb={2}>
                Most watchlisted
              </Text>
              <Box mt={2}>
                <ListCard theme={"#FF9103"} />
              </Box>
            </Box>
            <Box flex={1}>
              <Box mt={10}>
                <Flex
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                  bg={"#FFF"}
                  border="1px solid #E4E4E4"
                  borderRadius={12}
                  width={"100%"}
                  padding={4}
                >
                  <Box>
                    <Heading fontSize={24} fontWeight={400}>
                      0
                    </Heading>
                    <Text color="#3D3D3D" fontSize={12} fontWeight={500}>
                      Number of watchlists
                    </Text>
                  </Box>
                  <img src="/svg/flag.svg" alt="" />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </>
      </BoxLayout>
    </Box>
  );
};
