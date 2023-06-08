//Components
import { Flex, Text, CustomButton, CardFeature } from "@/components";

//Img
import SaleScreen from "@/assets/saleScreen.jpg";

//Constants
import { colors } from "@/constants";

//Icons
import { BGSale } from "@/assets/icons";

const Sale = () => {
  return (
    <Flex
      mt="150px"
      align="center"
      direction="column"
      color={colors.section}
      style={{ position: "relative" }}
    >
      <div style={{ position: "absolute", left: -100, top: -50, zIndex: 0 }}>
        <BGSale width="800" height="600" />
      </div>
      <Flex gap="20px" mt="20px" style={{ zIndex: 1 }}>
        <Flex w="60%" direction="column">
          <Text size="30px" mb="20px" style={{ textAlign: "start" }}>
            Controla tu inventario y maximiza tus ingresos con nuestra
            innovadora función de ventas
          </Text>
          <img src={SaleScreen} style={{ width: "100%" }} />
        </Flex>
        <Flex
          w="40%"
          direction="column"
          bg={colors.section}
          pd="20px"
          style={{ borderRadius: "5px" }}
        >
          <Text
            color={colors.secondaryColor}
            style={{ textAlign: "start" }}
            mb="10px"
          >
            Imagina tener el control total de tus productos y ventas en un solo
            lugar. Con nuestra página de ventas, podrás generar tickets al
            instante mientras visualizas el total de tus productos agregados.
            ¡Es como tener un asistente personal que se encarga de todo!.
          </Text>
          <Text style={{ textAlign: "start" }} color={colors.secondaryColor}>
            Además, hemos desarrollado una innovadora forma de mostrar la
            disponibilidad de tus productos. ¿Te imaginas tener un indicador
            visual que te muestre en tiempo real la cantidad de stock
            disponible? Con nuestra barra de colores, nunca más tendrás que
            preocuparte por quedarte sin productos. El verde te indica que hay
            suficiente stock, el amarillo te avisa que se está agotando y el
            rojo te alerta que ya no hay más. ¡Es como tener semáforos de
            inventario!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Sale;
