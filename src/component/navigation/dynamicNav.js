import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

export const DynamicNav = () => {
  const navs = [
    { isActive: true, name: "Dashboard", link: "", icon: "/svg/home.svg" },
    { isActive: false, name: "Listings", link: "", icon: "/svg/location.svg" },
    ,
    { isActive: false, name: "Users", link: "", icon: "/svg/user.svg" },
    ,
    { isActive: false, name: "Account", link: "", icon: "/svg/card.svg" },
    ,
    { isActive: false, name: "Request", link: "", icon: "/svg/date.svg" },
    ,
    { isActive: false, name: "Settings", link: "", icon: "/svg/settings.svg" },
  ];
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={5}
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02);"
      backgroundColor="#fff"
      px={12}
      py={4}
    >
      {navs.map((nav, navIndex) => (
        <Link href={nav.link}>
          <Flex
            gap={2}
            backgroundColor={nav.isActive ? "#F5F5F5" : "transparent"}
            py={3}
            px={6}
            borderRadius="8px"
            key={navIndex}
            _hover={{ background: "#F5F5F5" }}
          >
            <img className="navImg" src={nav.icon} alt={`${nav.name}icon`} />
            <Text
              display={{
                base: "block",
                lg: "block",
                md: "none",
                // sm: "none",
              }}
              fontSize={{
                lg: "inherit",
                sm: "13px",
              }}
              fontWeight={nav.isActive ? "600" : "400"}
              color={nav.isActive ? "#191919" : "#3D3D3D"}
            >
              {nav.name}
            </Text>
          </Flex>
        </Link>
      ))}

      <Flex
        py={2}
        borderRadius={8}
        px={3}
        gap={2}
        flex={1}
        display={{
          base: "none",
          lg: "flex",
          md: "none",
          sm: "none",
        }}
        background={"#F5F5F5"}
        border={"1px solid #E4E4E4"}
      >
        <input
          placeholder="Search... properties, customers here"
          style={{ width: "100%", border: 0, outline: "0", backgroundColor: "transparent" }}
          width={"100%"}
        />
        <img src="/svg/search.svg" alt="" />
      </Flex>
    </Flex>
  );
};
