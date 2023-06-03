import { Flex, Text } from "@/components";

const CardFeature = ({ title, body }) => {
  return (
    <Flex direction="column" justify="center" mt="20px">
      <Text size="14px" w="250px" weight="bold">
        {title}
      </Text>
      <Text size="14px" w="250px">
        {body}
      </Text>
    </Flex>
  );
};

export default CardFeature;
