import { Flex, Text, CustomButton } from "@/components";

//Constants
import { colors } from "@/constants";

const NavBar = () => {
  const openLogin = () => {
    fbq("track", "ClickLogin");
    const externalUrl = "https://boss-control-front.vercel.app/";
    window.open(externalUrl, "_blank");
  };

  const openRegister = () => {
    fbq("track", "ClickRegister");
    const externalUrl = "https://boss-control-front.vercel.app/register";
    window.open(externalUrl, "_blank");
  };

  return (
    <Flex
      w="100vw"
      h="60px"
      pd="0px 20px"
      align="center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: colors.btnPrimary,
        zIndex: 10,
        backgroundSize: "210% 210%",
        backgroundPosition: "100% 0",
      }}
      justify="space-between"
    >
      <Text size="20px" weight="bold">
        Boss-control
      </Text>
      <Flex w="fit-content" gap="10px">
        <CustomButton
          bg={colors.btnDanger}
          color="white"
          onClick={() => openLogin()}
        >
          Inicia
        </CustomButton>
        <CustomButton
          bg={colors.btnSuccess}
          color="white"
          onClick={() => openRegister()}
        >
          Registrate
        </CustomButton>
      </Flex>
    </Flex>
  );
};
export default NavBar;
