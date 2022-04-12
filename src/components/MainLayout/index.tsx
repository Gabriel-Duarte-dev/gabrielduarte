import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../../index.css";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="#282A36"
      justify="center"
      align="center"
      direction="column"
    >
      {children}
    </Flex>
  );
}
