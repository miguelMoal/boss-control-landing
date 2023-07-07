//components
import { Flex, Text, ScreenBlock } from "@/components";
//img
import usersScreen from "@/assets/usersScreen.jpg";

const Users = () => {
  return (
    <Flex style={{ overflow: "hidden" }}>
      <ScreenBlock
        title={"Delega responsabilidades a tus colaboradores"}
        img={usersScreen}
        toLeft={true}
        alignTitle="start"
      >
        <Text style={{ textAlign: "start" }} color="white">
          La plataforma permitirá al administrador crear perfiles de
          colaboradores y asignar permisos segun convenga. La administración de
          permisos proporcionará un control más preciso y seguro sobre quién
          puede acceder y modificar la información relacionada con las ventas,
          ingresos y egresos de la empresa. Esto mejorará la colaboración,
          facilitará la asignación de responsabilidades y garantizará la
          integridad de los datos dentro del sistema.
        </Text>
      </ScreenBlock>
    </Flex>
  );
};

export default Users;
