import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type CardProps = {
  description: string;
  image: string;
};

export function Card({ description, image }: CardProps): JSX.Element {
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      w="305px"
      mb={5}
      mr={8}
      _last={{ mr: 0 }}
      cursor="pointer"
      transition={{ type: "spring", stiffness: 300 }}
      whileHover={{ transform: "translateY(-5px)" }}
    >
      <Box
        w="100%"
        h="275px"
        bgImage={`url('${image}')`}
        bgSize="cover"
        bgPos="center"
        borderRadius="7px 7px 0 0"
      ></Box>

      <Flex
        justify="center"
        align="center"
        textAlign="left"
        w="100%"
        p={4}
        bg="#44475A"
        borderRadius="0 0 7px 7px"
      >
        <Text
          fontSize="14px"
          fontWeight="100"
          color="#f8f8f8"
          lineHeight="1.1rem"
        >
          {description}
        </Text>
      </Flex>
    </MotionFlex>
  );
}
