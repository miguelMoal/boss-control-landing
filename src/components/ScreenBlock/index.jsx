import { Flex, Text } from "@/components";
//Constants
import { colors } from "@/constants";
//Icons
import { BGSale } from "@/assets/icons";

const ScreenBlock = ({
  title,
  children,
  img,
  toLeft,
  alignTitle = "start",
  orderImg = 1,
}) => {
  return (
    <Flex
      mt="150px"
      align="center"
      direction="column"
      color={colors.section}
      style={{ position: "relative" }}
    >
      <div style={{ position: "absolute", left: -100, top: -50, zIndex: 0 }}>
        <BGSale width="800" height="600" />
      </div>
      <Flex
        gap="20px"
        mt="20px"
        style={{ zIndex: 1 }}
        smallStyles={`flex-direction:column; align-items:center `}
      >
        <Flex
          w="60%"
          direction="column"
          style={{ order: orderImg }}
          smallStyles={`width :90%`}
        >
          <Text
            w="100%"
            size="30px"
            mb="20px"
            smallStyles={`align-text: center`}
          >
            {title}
          </Text>
          <img src={img} style={{ width: "100%" }} />
        </Flex>
        <Flex
          mt="40px"
          w="40%"
          direction="column"
          pd="20px"
          smallStyles={`width:70%; order: 1; width: 100%`}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ScreenBlock;
