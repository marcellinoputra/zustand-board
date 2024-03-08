import Board from "./components/board/board";
import { ThemeProvider } from "./components/theme-provider";
// import { Box, ChakraProvider, theme } from "@chakra-ui/react";

export default function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="theme-ui">
    //   <div className="max-w-screen-lg m-['auto'] p-5">
    //     <Board />
    //   </div>
    // </ThemeProvider>
    <>
      <ThemeProvider defaultTheme="light" storageKey="theme-ui">
        <Board />
      </ThemeProvider>
    </>
  );
}
