import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="90px" />
      <Text>Game Platform</Text>
    </HStack>
  );
};

export default NavBar;
