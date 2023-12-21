import { DashboardLayout } from "@/layout";
import { Navbar } from "@/component/navigation/staticNav";
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
      <Box display="flex" mt={4} gap={6} justifyContent="flex-start">
        <SalesOverview />
        <Box flex={"30%"}>
          <PropertyOverview />
          <CustomerOverview />
        </Box>
      </Box>
      <Box justifyContent="flex-start" display="flex" mt={10} gap={4} alignItems="flex-start">
        <ListingOverview />
        {/* <Flex> */}
        <OutstandingOverview />
        <TopSellingView />
        {/* </Flex> */}
      </Box>
    </DashboardLayout>
  );
}
