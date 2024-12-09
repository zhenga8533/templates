import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import metadata from "../metadata.json";

const Home = () => {
  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      <VStack gap={4}>
        <Heading textAlign="center">
          Welcome to the
          <br />
          ChakraV2 Template!
        </Heading>
        <Heading size="md" textAlign="center">
          (v{metadata.version})
        </Heading>

        <Text textAlign="center" maxWidth="404px">
          This is a simple template for creating a Chakra UI v2 app with React Router v6.
        </Text>

        <Button as={Link} leftIcon={<FaRocket />} to="/" size="lg" colorScheme="blue">
          Let's Go!
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
