import { DashboardLayout } from "@/layout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { SalesOverview } from "@/component/views/salesAnalytics";
import { PropertyOverview } from "@/component/views/propertyOverview";
import { CustomerOverview } from "@/component/views/customerOverview";
import { ListingOverview } from "@/component/views/listingOverview";
import { OutstandingOverview } from "@/component/views/outstandingOverview";
import { TopSellingView } from "@/component/views/topSelling";

export default function Home() {
  return (
    <DashboardLayout>
      <section>
        <Flex gap={1}>
          <img src="/img/hand.png" alt="" />
          <Heading size="lg" as={"h5"}>
            Hi Ahmed
          </Heading>
        </Flex>
        <Text fontWeight={500} mt={2}>
          Welcome to your Dashboard
        </Text>
      </section>
      <Box
        display={{
          sm: "block",
          lg: "flex",
          md: "block",
          base: "block",
        }}
        mt={4}
        gap={8}
        justifyContent="flex-start"
      >
        <SalesOverview />
        <Box
          my={{
            md: "0.8rem",
            sm: "0.8rem",
            base: "0.8rem",
            lg: "0.4rem",
          }}
          flex={"30%"}
        >
          <PropertyOverview />
          <CustomerOverview />
        </Box>
      </Box>
      <Box
        display={{
          sm: "block",
          lg: "flex",
          md: "block",
          base: "block",
        }}
        justifyContent="flex-start"
        mt={10}
        gap={4}
        alignItems="flex-start"
      >
        <ListingOverview />
        <OutstandingOverview />
        <TopSellingView />
      </Box>
      <Flex my={3} justifyContent={"center"} gap={2} alignItems={"center"}>
        <img src="/svg/lock.svg" alt="" />
        <Text color="#919191">End-to-end encryption</Text>
      </Flex>
      <Flex
        position="fixed"
        bottom={5}
        right={3}
        bg="#4545FE"
        alignItems="center"
        gap={3}
        py={2}
        px={5}
        borderRadius={50}
        width="fit-content"
        role="button"
      >
        <img src="/svg/bulb.svg" alt="" />
        <Text color="#fff" fontSize={18} fontWeight={400}>
          Veerge Assistant
        </Text>
        <img src="/svg/close.svg" alt="" />
      </Flex>
    </DashboardLayout>
  );
}
