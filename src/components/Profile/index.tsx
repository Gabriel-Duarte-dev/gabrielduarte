import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import profile from "/images/profile.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

export function Profile(): JSX.Element {
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      textAlign="center"
      direction="column"
      align="center"
      w="410px"
      mb={40}
      transform="translateY(-100px)"
      opacity={0}
      transition={{ delay: 0.5 }}
      animate={{ transform: "translateY(100px)", opacity: 1 }}
    >
      <Box filter="auto" dropShadow="0px 0px 15px rgba(255,184,108,26%)">
        <Image
          src={profile}
          w="185px"
          clipPath="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
        />
      </Box>

      <Icon as={RiArrowDownSLine} color="#44475A" fontSize="60px" />

      <Text fontSize="16px" fontWeight="100" color="#f8f8f8">
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis.Atirei o pau no gatis, per
        gatis num morreus.Cevadis im ampola pa arma uma pindureta.Mauris nec
        dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
        nisl.
      </Text>
    </MotionFlex>
  );
}
