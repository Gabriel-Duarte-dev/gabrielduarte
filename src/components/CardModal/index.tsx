import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Text,
  Link,
  Flex,
  ModalBody,
} from "@chakra-ui/react";
import { Carousel } from "../Carousel";

type CardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  size?: string;
  link: string;
  description: string;
  slides: string[];
};

export function CardModal({
  isOpen,
  onClose,
  size,
  link,
  description,
  slides,
}: CardModalProps): JSX.Element {
  return (
    <Modal
      scrollBehavior="outside"
      isOpen={isOpen}
      onClose={onClose}
      size={size}
    >
      <ModalOverlay />
      <ModalContent bg="#282a36">
        <ModalCloseButton
          zIndex={2}
          color="#fff"
          fontWeight="bold"
          bg="#44475a"
          _hover={{ bg: "#282a36" }}
          _active={{ bg: "" }}
        />

        <ModalBody w="100%" padding={0}>
          <Carousel slides={slides} />
        </ModalBody>

        <ModalFooter bg="#282a36" textAlign="left">
          <Flex direction="column" justify="flex-start">
            <Text
              maxH="170px"
              overflow="auto"
              fontSize="16px"
              fontWeight={100}
              color="#f8f8f8"
            >
              {description}
            </Text>
            <br />
            <br />
            <Link
              target="_blank"
              fontWeight="300"
              fontSize="14px"
              color="#ff79c6"
              href={link}
            >
              {link}
            </Link>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
