import React from "react";
import { Box, Text, Flex, Center, Button } from "native-base";
import Tombol from "../component/Tombol";

export default function Calculator() {
  const [number, setNumber] = React.useState("");

  const Aritmatic = (value) => {
    setNumber((prevCount) => prevCount + value);
  };

  const Result = () => {
    try {
      let hasil = eval(number).toString();
      setNumber(hasil);
    } catch (error) {
      setNumber("Error");
    }
  };

  const Clear = () => {
    setNumber("");
  };

  const Del = () => {
    setNumber(number.slice(0, -1));
  };

  return (
    <Box bg="primary.300" flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl">{number}</Text>
      <Box mt={3}>
        <Tombol
          Aritmatic={Aritmatic}
          angka1="1"
          angka2="2"
          value1="-"
          value2="+"
        />
      </Box>
      <Box mt={3}>
        <Tombol
          Aritmatic={Aritmatic}
          angka1="3"
          angka2="4"
          value1="/"
          value2="*"
        />
      </Box>
      <Box mt={3}>
        <Tombol
          Result={Result}
          Aritmatic={Aritmatic}
          angka1="5"
          angka2="6"
          value1="%"
          value2="="
        />
      </Box>
      <Box mt={3}>
        <Tombol
          Aritmatic={Aritmatic}
          angka1="7"
          angka2="8"
          value1="9"
          value2="0"
        />
      </Box>
      <Box mt={3}>
        <Flex direction="row">
          <Button
            transparent
            ml={3}
            mr={3}
            bg="primary.400"
            onPress={() => {
              Clear();
            }}
          >
            <Center
              _text={{
                color: "white",
                fontSize: "35px",
              }}
            >
              Clear
            </Center>
          </Button>
          <Button
            transparent
            ml={3}
            mr={3}
            bg="primary.400"
            onPress={() => {
              Del();
            }}
          >
            <Center
              _text={{
                color: "white",
                fontSize: "35px",
              }}
            >
              Del
            </Center>
          </Button>
          <Button
            transparent
            ml={3}
            mr={3}
            bg="primary.400"
            onPress={() => {
              Aritmatic(".");
            }}
          >
            .
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
