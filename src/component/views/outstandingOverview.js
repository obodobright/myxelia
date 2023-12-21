import { BoxLayout } from "@/layout/BoxLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const OutstandingOverview = () => {
  return (
    <Box flex={"30%"}>
      <BoxLayout>
        <Flex mb={4} alignItems="flex-start" justifyContent="space-between">
          <Box>
            <Heading as="h4" fontSize={25} fontWeight={600}>
              ₦ 0.00
            </Heading>
            <Text>Total Outstanding Balance</Text>
          </Box>
          <Flex role="button" alignItems="center" gap={1}>
            <Text color="#CBCBCB" fontWeight={500} fontSize={14}>
              View all
            </Text>
            <img src="/svg/rightarrow2.svg" alt="" />
          </Flex>
        </Flex>
        <Flex position="relative" mt={6} gap={7}>
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius={7}
            width={254}
            height={154}
            background={"#F5F5F5"}
          >
            <img width={100} src="/svg/placeholder.svg" alt="svg-image" />
          </Flex>
          <Flex
            width="100%"
            alignItems="flex-start"
            gap={4}
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text color="#191919" fontSize={20} fontWeight={600}>
              None
            </Text>
            <Flex flexDir="column" gap={7}>
              <Box>
                <Text color="#FF6A6A" fontSize={14} fontWeight={600}>
                  ₦ 0.00
                </Text>
                <Text color="#606060" fontSize={12} fontWeight={400}>
                  Outstanding Balance
                </Text>
              </Box>
              <Flex
                gap={4}
                width="100%"
                alignItems="center"
                justifyContent="right"
                display={"flex"}
                position="relative"
                right="-100px"
              >
                <Text>1/5</Text>
                <Box
                  width={"40px"}
                  background="#E4E4E4"
                  alignItems="center"
                  justifyContent="center"
                  height={"40px"}
                  display="flex"
                  borderRadius="50%"
                  role="button"
                >
                  <img width={20} src="/svg/leftarrow.svg" alt="" />
                </Box>
                <Box
                  width={"40px"}
                  background="#E4E4E4"
                  alignItems="center"
                  justifyContent="center"
                  height={"40px"}
                  display="flex"
                  borderRadius="50%"
                  role="button"
                >
                  <img width={20} src="/svg/rightarrow.svg" alt="" />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </BoxLayout>
    </Box>
  );
};
