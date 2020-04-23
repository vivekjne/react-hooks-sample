import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppearanceContext } from "../providers/AppearanceProvider";
import { darkTheme, lightTheme } from "../styles/theme";
import SignIn from "../components/Signin";
import { createMuiTheme } from "@material-ui/core";
import Todos from "./Todos";
import TodosProvider from "../providers/TodosContext";

const Home = () => {
  const { isDarkMode } = useContext(AppearanceContext);
  const theme = isDarkMode
    ? createMuiTheme(darkTheme)
    : createMuiTheme(lightTheme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <SignIn /> */}
        <TodosProvider>
          <Todos />
        </TodosProvider>
      </ThemeProvider>
    </>
  );
};

export default Home;
