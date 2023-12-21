import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { TextHead } from "../Typography/textHead";
import { useState } from "react";
import { AnalyticsCard } from "../cards/analyticsCard";

export const SalesOverview = () => {
  const filterBy = ["1 Week", "1 Month", "1 Year"];
  const [currSelected, setCurrSelected] = useState(0);

  return (
    <Box
      bg="#fff"
      rounded={16}
      py={4}
      px={5}
      flex={"60%"}
      boxShadow=" 0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
    >
      <Box>
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Box>
            <TextHead text="Sales Overview" />
            <Text fontWeight="400" mt={2} fontSize={12} color="#606060">
              Showing overview Jan 2022 - Sep 2022
            </Text>
          </Box>
          <Flex
            borderRadius="8px"
            py={2}
            px={5}
            alignItems="center"
            role="button"
            cursor="pointer"
            justifyContent={"center"}
            border="1px solid #CBCBCB"
          >
            <Text fontWeight={500} color="#CBCBCB" fontSize={14}>
              View Transactions
            </Text>
          </Flex>
        </Flex>
        <Flex
          borderBottom="1px solid #E4E4E4"
          alignItems="center"
          pb={3}
          gap={3}
          justifyContent={"right"}
          mt={6}
        >
          {filterBy.map((fl, flIndex) => (
            <Button
              onClick={() => setCurrSelected(flIndex)}
              key={flIndex}
              borderRadius={4}
              px={4}
              bg={currSelected === flIndex ? "#F5F5F5" : "transparent"}
            >
              <Text color="#3D3D3D" fontWeight={600} fontSize={14} textAlign="center">
                {fl}
              </Text>
            </Button>
          ))}
        </Flex>
        <Flex padding={5} mt={2}>
          <Box mx={2} gap={3} display="flex" alignItems="center" flex="50%">
            <button
              style={{
                height: "20px",
                width: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                background: "#F5F5F5",
              }}
            >
              <img src="/svg/leftarrow.svg" />
            </button>
            <Box minH={150} width="100%" bg="#fff"></Box>
            <button
              style={{
                height: "25px",
                width: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                background: "#F5F5F5",
              }}
            >
              <img src="/svg/rightarrow.svg" />
            </button>
          </Box>
          <Box mx={2} gap={6} display="grid" gridTemplateColumns={"repeat(2, 1fr)"} flex="50%">
            <AnalyticsCard theme="#4545FE" amount={"100.00"} subject="Balance" />
            <AnalyticsCard theme="#12D8A0" amount={"20.00"} subject="Deposit" />
            <AnalyticsCard theme="#191919" amount={"3000.05"} subject="Purchase" />
            <AnalyticsCard
              type={"withdrawal"}
              theme="#FF6A6A"
              amount={"100.40"}
              subject="Withdrawal"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
