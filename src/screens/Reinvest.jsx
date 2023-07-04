//components
import { ScreenBlock, Text } from "@/components";
//img
import reinvestScreen from "@/assets/reinvestScreen.jpg";

const Reinvest = () => {
  return (
    <ScreenBlock
      title={"Invierte de forma eficaz"}
      img={reinvestScreen}
      toLeft={true}
      alignTitle="start"
      orderImg={1}
    >
      <Text style={{ textAlign: "start" }} color="white" mb="10px">
        Esta funcion esta diseñada para ayudarte a tomar decisiones de inversión
        y maximizar tus ganancias sin exceder tu presupuesto de acuerdo a los
        costos obtenidos con aterioridad. Si estás buscando una forma
        inteligente de invertir tu dinero, esta herramienta te brinda la
        asistencia y orientación necesarias para lograrlo.
      </Text>
      <Text style={{ textAlign: "start" }} color="white">
        Podras poner un limite de presupuesto si asi lo deseas y el semaforo de
        productos te ayudara a saber que productos ya no tienen disposicion en
        tu stock y cuales estan por agotarse lo que te brindara claridad sobre
        cómo distribuir tu presupuesto entre diferentes productos.
      </Text>
    </ScreenBlock>
  );
};

export default Reinvest;
