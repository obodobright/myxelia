import { Box, Flex, Text } from "@chakra-ui/react";
import { TextH6 } from "../Typography/textH6";
import { BoxLayout } from "@/layout/BoxLayout";
import { ViewCard } from "../cards/viewCard";

export const PropertyOverview = () => {
  return (
    <BoxLayout>
      <Flex mb={6} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={3}>
          <img src="/img/house.png" alt="house-icon" />
          <TextH6 text="Property Overview" />
        </Flex>
        <Flex cursor="pointer" alignItems="center" gap={1}>
          <Text color="#CBCBCB" fontSize={12} fontWeight={500}>
            View all
          </Text>
          <img src="/svg/rightarrow2.svg" alt="" />
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={3}>
        <ViewCard title="Total" analytics={0} />
        <ViewCard title="Available" analytics={0} />
        <ViewCard title="Sold Out" analytics={0} />
      </Flex>
    </BoxLayout>
  );
};
