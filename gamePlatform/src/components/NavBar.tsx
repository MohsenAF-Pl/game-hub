import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./colorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="90px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
