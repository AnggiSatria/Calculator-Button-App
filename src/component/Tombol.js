import React from "react";
import { Flex, Center, Button } from "native-base";

export default function Tombol({
  Aritmatic,
  angka1,
  angka2,
  value1,
  value2,
  Result,
}) {
  return (
    <Flex direction="row">
      <Button
        transparent
        ml={3}
        mr={3}
        size={16}
        bg="primary.400"
        onPress={() => {
          Aritmatic(angka1);
        }}
      >
        <Center
          _text={{
            color: "white",
            fontSize: "35px",
          }}
        >
          {angka1}
        </Center>
      </Button>
      <Button
        transparent
        ml={3}
        mr={3}
        size={16}
        bg="primary.400"
        onPress={() => {
          Aritmatic(angka2);
        }}
      >
        <Center
          _text={{
            color: "white",
            fontSize: "35px",
          }}
        >
          {angka2}
        </Center>
      </Button>
      <Button
        transparent
        ml={3}
        mr={3}
        size={16}
        bg="primary.900"
        onPress={() => {
          Aritmatic(value1);
        }}
      >
        <Center
          _text={{
            color: "white",
            fontSize: "35px",
          }}
        >
          {value1}
        </Center>
      </Button>
      {value2 === "=" ? (
        <Button
          transparent
          ml={3}
          mr={3}
          size={16}
          bg="primary.900"
          onPress={() => {
            Result();
          }}
        >
          <Center
            _text={{
              color: "white",
              fontSize: "35px",
            }}
          >
            {value2}
          </Center>
        </Button>
      ) : (
        <Button
          transparent
          ml={3}
          mr={3}
          size={16}
          bg="primary.900"
          onPress={() => {
            Aritmatic(value2);
          }}
        >
          <Center
            _text={{
              color: "white",
              fontSize: "35px",
            }}
          >
            {value2}
          </Center>
        </Button>
      )}
    </Flex>
  );
}
