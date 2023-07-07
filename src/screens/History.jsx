//components
import { ScreenBlock, Text, Flex } from "@/components";
//img
import historyScreen from "@/assets/historyScreen.jpg";

const History = () => {
  return (
    <Flex style={{ overflow: "hidden" }}>
      <ScreenBlock
        toLeft={false}
        img={historyScreen}
        title={`Historial de ventas`}
        alignTitle="end"
        orderImg={0}
      >
        <Text style={{ textAlign: "start" }} color="white">
          Una función imprescindible para cualquier negocio que desee llevar un
          registro detallado y preciso de su historial de ventas. una búsqueda
          rápida y filtrado avanzado en el historial de ventas. Puedes buscar
          ventas específicas utilizando los criterios de fecha y hora.
        </Text>
      </ScreenBlock>
    </Flex>
  );
};

export default History;
