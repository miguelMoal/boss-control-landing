//components
import { ScreenBlock, Text } from "@/components";
//img
import analyticScreen from "@/assets/analyticScreen.jpg";

const Analytic = () => {
  return (
    <ScreenBlock
      toLeft={false}
      img={analyticScreen}
      title={"Análisis de ventas con gráficas"}
      alignTitle="end"
    >
      <Text style={{ textAlign: "start" }} color="white">
        Esta función es una herramienta imprescindible para empresas que desean
        comprender mejor su desempeño en ventas y tomar decisiones estratégicas
        basadas en datos concretos, desglosando las ventas generadas por
        diferentes períodos de tiempo. La plataforma también ofrece una gráfica
        visual interactiva que muestra los productos más vendidos. Esta
        representación visual permite identificar rápidamente los productos que
        están generando mayores ingresos y aquellos que pueden requerir mayor
        atención.
      </Text>
    </ScreenBlock>
  );
};

export default Analytic;
