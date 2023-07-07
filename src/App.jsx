import "./App.css";
//Components
import { Flex, NavBar, Text, SquareFloat } from "@/components";
//Screens
import {
  Features,
  Sale,
  Users,
  Products,
  Reinvest,
  Analytic,
  History,
} from "@/screens";
//Constants
import { colors } from "@/constants";

function App() {
  return (
    <div className="containerHome">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          overflow: "hidden",
        }}
      >
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
      </div>

      <NavBar />
      <Flex
        h="calc(100vh - 60px)"
        w="100%"
        mt="30px"
        align="center"
        justify="center"
      >
        <Flex direction="column" w="fit-content" align="center">
          <Text
            size="60px"
            color={colors.secondaryColor}
            smallStyles={`font-size: 40px`}
          >
            BOSS-CONTROL
          </Text>
          <Text size="20px" weight="bold" smallStyles={`font-size: 16px`}>
            Toma el control de tu negocio
          </Text>
          <Text size="18px" smallStyles={`font-size: 16px`} w="90%">
            Controla tus ganancias y tus inversiones, nunca más te quedarás sin
            inventario.
          </Text>
        </Flex>
      </Flex>
      <Features />
      <Sale />
      <Products />
      <Reinvest />
      <Analytic />
      <Users />
      <History />
    </div>
  );
}

export default App;
