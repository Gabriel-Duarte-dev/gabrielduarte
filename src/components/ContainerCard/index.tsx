import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
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
  const [onBreakeCard] = useMediaQuery("(min-width: 730px)");
  return (
    <MotionBox
      mb={40}
      transition={{ delay: 0.8 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      textAlign="center"
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
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>{children}</SimpleGrid>
    </MotionBox>
  );
}
