//Components
import { Flex, Text, ScreenBlock } from "@/components";
//Img
import SaleScreen from "@/assets/saleScreen.jpg";

const Sale = () => {
  return (
    <Flex>
      <ScreenBlock
        img={SaleScreen}
        toLeft={true}
        title={"Realiza tus ventas con nuestra innovadora funcion"}
        alignTitle="start"
      >
        <Text color="white" style={{ textAlign: "start" }} mb="10px">
          Ahora puedes tener el control total de tus productos y ventas en un
          solo lugar. Con nuestra página de ventas, podrás generar tickets al
          instante, mientras visualizas el total de tus productos agregados. ¡Es
          como tener un asistente personal que se encarga de todo!
        </Text>
        <Text style={{ textAlign: "start" }} color="white">
          Además, hemos desarrollado una innovadora forma de mostrar la
          disponibilidad de tus productos. Boss Control tiene un indicador
          visual que te muestra en tiempo real la cantidad de stock disponible.
          Con nuestra barra de colores, nunca más tendrás que preocuparte por
          quedarte sin productos. El verde te indica que hay suficiente stock,
          el amarillo te avisa que se está agotando y el rojo te alerta que ya
          no hay más productos en tu stock. ¡Es como tener un semáforo de
          inventario!
        </Text>
      </ScreenBlock>
    </Flex>
  );
};
export default Sale;
