import "./App.css";

//Components
import { Flex, NavBar, Text, SquareFloat } from "@/components";

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
            Crontrol de productos
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
