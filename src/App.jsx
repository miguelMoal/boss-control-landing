import "./App.css";

//Components
import {
  Flex,
  NavBar,
  Text,
  SquareFloat,
  CustomButton,
  CardFeature,
} from "@/components";

function App() {
  return (
    <div className="containerHome">
      <SquareFloat top={-200} />
      <SquareFloat top={200} left={1000} size="50px" animationDelay={"4s"} />
      <SquareFloat
        top={600}
        left={500}
        size="50px"
        opacity={4}
        animationDelay={"3s"}
      />
      <SquareFloat
        top={100}
        left={200}
        size="500px"
        opacity={0.1}
        animationDelay={"7s"}
      />
      <SquareFloat
        top={400}
        left={1300}
        size="330px"
        opacity={4}
        animationDelay={"5s"}
      />
      <NavBar />
      <Flex
        h="calc(100vh - 60px)"
        w="100%"
        mt="30px"
        align="center"
        justify="center"
        className="containerHome"
      >
        <Flex direction="column" w="fit-content" align="center">
          <Text size="60px">BOSS-CONTROL</Text>
          <Text size="20px" weight="bold">
            Toma el control de tu Empresa
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" direction="column" gap="40px">
        <Text>Vision General</Text>
        <Text w="60%" size="20px">
          Boss Control brindará a las empresas una solución integral para la
          gestión financiera. Con una interfaz intuitiva, informes detallados y
          seguridad de datos, esta plataforma será una herramienta valiosa para
          el control y análisis financiero de tu empresa.
        </Text>
        <CustomButton color="white" borderColor="white">
          Empieza tu prueba gratis
        </CustomButton>
        <Flex>
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
    </div>
  );
}

export default App;
