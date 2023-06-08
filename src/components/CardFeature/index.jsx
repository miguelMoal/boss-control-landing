import { Flex, Text } from "@/components";

const CardFeature = ({ title, body }) => {
  return (
    <Flex direction="column" align="center" mt="20px" w="220px">
      <Text size="14px" weight="bold">
        {title}
      </Text>
      <Text size="14px">{body}</Text>
    </Flex>
  );
};

export default CardFeature;
