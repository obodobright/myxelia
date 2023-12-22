import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";

function MyDrawer({ header, isOpen, onClose }) {
  const btnRef = React.useRef();
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#000"} className="">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader color="#fff">{header}</DrawerHeader>

          <Flex alignItems="center" justifyContent={"center"}>
            <Calendar className="calendar" onChange={onChange} showWeekNumbers value={value} />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MyDrawer;
