import {
  Box,
  Flex,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CardModal } from "../CardModal";

type CardProps = {
  description: string;
  resume: string;
  link: string;
  image: string;
  slides: string[];
};

export function Card({
  description,
  resume,
  link,
  image,
  slides,
}: CardProps): JSX.Element {
  const {
    isOpen: isOpenCardModal,
    onOpen: onOpenCardModal,
    onClose: onCloseCardModal,
  } = useDisclosure();
  const MotionFlex = motion(Flex);
  const [onBreakeCard] = useMediaQuery("(min-width: 730px)");
  return (
    <MotionFlex
      direction="column"
      justify="space-between"
      w="305px"
      mb={5}
      mr={!onBreakeCard ? 0 : 8}
      _last={{ mr: 0 }}
      cursor="pointer"
      transition={{ type: "spring", stiffness: 300 }}
      whileHover={{ y: -5 }}
      onClick={onOpenCardModal}
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
        justify="flex-start"
        textAlign="left"
        w="100%"
        h="calc(100% - 275px)"
        p={4}
        bg="#44475A"
        borderRadius="0 0 7px 7px"
        pos="relative"
      >
        <Text
          fontSize="14px"
          fontWeight="100"
          color="#f8f8f8"
          lineHeight="1.1rem"
          mb={8}
        >
          {resume}
        </Text>
        <Text
          fontWeight="300"
          fontSize="14px"
          lineHeight="1.1rem"
          color="#ff79c6"
          pos="absolute"
          bottom="5px"
        >
          {link}
        </Text>
      </Flex>

      <CardModal
        isOpen={isOpenCardModal}
        onClose={onCloseCardModal}
        size="2xl"
        link={link}
        description={description}
        slides={slides}
      />
    </MotionFlex>
  );
}
