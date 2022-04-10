import { Flex, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer(): JSX.Element {
  return (
    <Flex
      width="100%"
      minH="250px"
      justify="center"
      align="center"
      direction="column"
      bg="#6272A4"
      pos="relative"
    >
      <Stack direction="row" mb={2}>
        <Link target="_blank" href="https://github.com/Gabriel-Duarte-dev">
          <Icon
            transition="0.3s"
            fontSize="35px"
            as={BsGithub}
            color="#44475A"
            _hover={{ color: "#282A36", cursor: "pointer" }}
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gabriel-duarte-680084186/"
        >
          <Icon
            transition="0.3s"
            fontSize="35px"
            as={FaLinkedin}
            color="#44475A"
            _hover={{ color: "#282A36", cursor: "pointer" }}
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/gabriel_duarte00/"
        >
          <Icon
            transition="0.3s"
            fontSize="35px"
            as={BsInstagram}
            color="#44475A"
            _hover={{ color: "#282A36", cursor: "pointer" }}
          />
        </Link>
      </Stack>
      <HStack>
        <Icon
          transition="0.3s"
          fontSize="25px"
          as={MdEmail}
          color="#44475A"
          _hover={{ color: "#282A36", cursor: "pointer" }}
        />
        <Text fontSize="13px" fontWeight="100" color="#f8f8f8">
          gabrielduarte3011@gmail.com
        </Text>
      </HStack>

      <Text
        fontSize="13px"
        fontWeight="100"
        color="#f8f8f8"
        pos="absolute"
        bottom="2px"
      >
        Copyright © 2022 - Todos os direitos reservados a{" "}
        <Text display="inline-block" color="#50fa7b">
          Gabriel Duarte
        </Text>
      </Text>
    </Flex>
  );
}
