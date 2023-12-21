import { BoxLayout } from "@/layout/BoxLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TextH6 } from "../Typography/textH6";
import { ViewCard } from "../cards/viewCard";

export const CustomerOverview = () => {
  return (
    <BoxLayout>
      <Flex mb={6} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={3}>
          <img src="/img/user.png" alt="house-icon" />
          <TextH6 text="Customer Overview" />
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
        <ViewCard title="New" analytics={0} />
        <ViewCard title="Active" analytics={0} />
        <ViewCard title="Active" analytics={0} />
      </Flex>
    </BoxLayout>
  );
};
