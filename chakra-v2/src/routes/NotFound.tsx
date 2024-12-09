import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      <VStack gap={4}>
        <Heading textAlign="center">404</Heading>

        <Text textAlign="center" maxWidth="404px">
          Page Not Found!
        </Text>

        <Button as={Link} leftIcon={<FaRocket />} to="/" size="md" colorScheme="blue">
          Go Home
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
