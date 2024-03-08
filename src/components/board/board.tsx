import { Box } from "@chakra-ui/react";
import TopBar from "./Topbar";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";

export default function Board() {
  return (
    <>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>

      {/* <TopBar />
      <TodoList />
      <TodoAdd /> */}
    </>
  );
}

{
  /* <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Board />
      </Box>
    </ChakraProvider> */
}
