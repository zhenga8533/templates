import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box display="flex" minH="100vh">
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
