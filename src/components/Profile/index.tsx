import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import profile from "/images/profile.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

export function Profile(): JSX.Element {
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  return (
    <Flex
      textAlign="center"
      direction="column"
      align="center"
      w={{ base: "320px", sm: "410px" }}
      mt={10}
      mb={40}
    >
      <AnimatePresence>
        <MotionBox
          transition={{ delay: 0.5 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 1 }}
          filter="auto"
          dropShadow="0px 0px 15px rgba(255,184,108,26%)"
        >
          <Image
            src={profile}
            w="185px"
            clipPath="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
          />
        </MotionBox>
      </AnimatePresence>

      <MotionBox
        color="#44475A"
        fontSize="60px"
        transition={{ delay: 0.65 }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 1 }}
      >
        <RiArrowDownSLine />
      </MotionBox>

      <MotionText
        fontSize={{ base: "13px", sm: "16px" }}
        fontWeight="100"
        color="#f8f8f8"
        transition={{ delay: 0.8 }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 1 }}
      >
        Olá, meu nome é Gabriel Duarte, tenho 20 anos e estudo programação desde
        2019 quando comecei a faculdade de Ciência da Computação no CEUNSP, onde
        estou atualmente no 6º semestre. Comecei a trabalhar na área de
        tecnologia em 2020 quando entrei no quartel, lá eu executava tarefas
        como suporte ao cliente, administração de redes de computadores,
        manutenção de computadores e instalações de câmeras. Iniciei minha
        carreira como programador em fevereiro de 2021, logo após sair do
        serviço militar, desde então, venho trabalhando com desenvolvimento web
        utilizando as principais tecnologias do mercado.
      </MotionText>
    </Flex>
  );
}
