//components
import { ScreenBlock, Text } from "@/components";
//Img
import products from "@/assets/products.jpg";

const Products = () => {
  return (
    <ScreenBlock
      toLeft={false}
      img={products}
      alignTitle="end"
      title={"Controla la existencia de tus productos "}
      orderImg={0}
    >
      <Text color="white" style={{ textAlign: "start" }} mb="10px">
        Con esta funcion de inventariado altamente efectiva y confiable para la
        gestión de inventario y control de stock. Con su interfaz intuitiva y
        capacidad de generar informes detallados, te ayudará a mantener un
        inventario organizado, evitar pérdidas y optimizar tu cadena de
        suministro.
      </Text>
      <Text style={{ textAlign: "start" }} color="white">
        Si buscas una solución integral para la gestión de inventario,esta es la
        opción ideal para tu empresa.Puedes establecer umbrales máximos para
        cada producto y recibir alertas cuando el stock alcance esos niveles. El
        verde te indica que hay suficiente stock, el amarillo te avisa que se
        está agotando y el rojo te alerta que ya no hay más productos en tu
        stock.
      </Text>
    </ScreenBlock>
  );
};

export default Products;
