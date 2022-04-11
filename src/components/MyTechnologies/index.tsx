import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import {
  SiJavascript,
  SiTypescript,
  SiChakraui,
  SiMaterialui,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

export function MyTechnologies(): JSX.Element {
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      direction="column"
      mb={40}
      transition={{ delay: 0.8 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
    >
      <Heading
        letterSpacing="2px"
        color="#f8f8f8"
        fontWeight="400"
        fontSize="24px"
        mb={2}
      >
        TECNOLOGIAS
      </Heading>

      <Flex wrap="wrap">
        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={SiJavascript} color="#B9D800" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            Javascript
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={SiTypescript} color="#0075FF" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            Typescript
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={GrReactjs} color="#00C2FF" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            ReactJS
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={SiChakraui} color="#04D7E4" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            ChakraUI
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={SiMaterialui} color="#2856FC" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            MaterialUI
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={FaNodeJs} color="#009D23" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            NodeJS
          </Text>
        </Flex>

        <Flex align="flex-end" mr={4} mb={4}>
          <Icon as={SiMongodb} color="#41A247" fontSize="35px" />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            MongoDB
          </Text>
        </Flex>

        <Flex align="flex-end" mb={4}>
          <Icon as={SiDocker} color="#42c5f5" fontSize="35px" mr={1} />
          <Text color="#f8f8f8" fontWeight="100" fontSize="13px">
            Docker
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
