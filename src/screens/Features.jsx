//Components
import { Flex, Text, CustomButton, CardFeature } from "@/components";
//icons
import { SalesIcon, ProfitsIcon, UserIcon } from "@/assets/icons";
//Constants
import { colors } from "@/constants";

const Features = () => {
  const openLogin = () => {
    fbq("track", "ClickRefisterSummary");
    const externalUrl = "https://boss-control-front.vercel.app/";
    window.open(externalUrl, "_blank");
  };

  return (
    <Flex align="center" direction="column" gap="50px">
      <Text size="30px" weight="bold">
        Vision General
      </Text>
      <Text w="60%" size="18px" smallStyles={`width: 90%`}>
        Boss Control brindará a las empresas una solución integral para la
        gestión financiera. Con una interfaz intuitiva, informes detallados y
        seguridad de datos, esta plataforma será una herramienta valiosa para el
        control y análisis financiero de tu empresa.
      </Text>
      <CustomButton
        color="white"
        bg={colors.btnDanger}
        onClick={() => openLogin()}
      >
        Abrir en nueva ventana
      </CustomButton>
      <Flex
        justify="space-around"
        mt="50px"
        gap="10px"
        smallStyles={`flex-direction: column`}
      >
        <Flex color={colors.error} direction="column" align="center">
          <SalesIcon />
          <CardFeature
            title={"Gestión de ventas"}
            body={
              "La plataforma te permitirá registrar y gestionar tus ventas de productos."
            }
          />
        </Flex>
        <Flex color={colors.success} direction="column" align="center">
          <ProfitsIcon />
          <CardFeature
            title={" Control de ingresos"}
            body={
              "La plataforma te facilitara el seguimiento de los ingresos generados por las ventas."
            }
          />
        </Flex>
        <Flex color={colors.secondaryColor} direction="column" align="center">
          <UserIcon />
          <CardFeature
            title={"Gestion de colaboradores"}
            body={"Delega permisos a tus colaboradores."}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Features;
