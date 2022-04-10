import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ContainerCardProps = {
  title: string;
  children: ReactNode;
};

export function ContainerCard({
  title,
  children,
}: ContainerCardProps): JSX.Element {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      mb={40}
      opacity={0}
      transition={{ delay: 0.5 }}
      animate={{ transform: "translateY(100px)", opacity: 1 }}
      textAlign="center"
      maxW="70%"
    >
      <Heading
        color="#f8f8f8"
        fontSize="36px"
        fontWeight="400"
        letterSpacing="2px"
        mb={20}
      >
        {title}
      </Heading>
      <Flex justify="center" wrap="wrap">
        {children}
      </Flex>
    </MotionBox>
  );
}
