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
} from "@chakra-ui/react";
import React from "react";

function MyDrawer({ header, isOpen, onClose }) {
  const btnRef = React.useRef();

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7.00072 5.43633L11.9507 0.486328L13.3647 1.90033L8.41472 6.85033L13.3647 11.8003L11.9507 13.2143L7.00072 8.26433L2.05072 13.2143L0.636719 11.8003L5.58672 6.85033L0.636719 1.90033L2.05072 0.486328L7.00072 5.43633Z"
              fill="white"
            />
          </svg>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MyDrawer;
