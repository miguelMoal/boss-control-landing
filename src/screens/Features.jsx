//Components
import { Flex, Text, CustomButton, CardFeature } from "@/components";

const Features = () => {
  return (
    <Flex align="center" direction="column" gap="40px">
      <Text size="30px" weight="bold">
        Vision General
      </Text>
      <Text w="60%" size="20px">
        Boss Control brindará a las empresas una solución integral para la
        gestión financiera. Con una interfaz intuitiva, informes detallados y
        seguridad de datos, esta plataforma será una herramienta valiosa para el
        control y análisis financiero de tu empresa.
      </Text>
      <CustomButton color="white" borderColor="white">
        Empieza tu prueba gratis
      </CustomButton>
      <Flex justify="space-around">
        <CardFeature
          title={"Gestión de ventas"}
          body={
            "La plataforma te permitirá registrar y gestionar tus ventas de productos."
          }
        />
        <CardFeature
          title={" Control de ingresos"}
          body={
            "La plataforma te facilitara el seguimiento de los ingresos generados por las ventas."
          }
        />
        <CardFeature
          title={"Gestion de colaboradores"}
          body={"Delega permisos a tus colaboradores."}
        />
      </Flex>
    </Flex>
  );
};
export default Features;
