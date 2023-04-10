import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";
import DisplayWeather from "./components/DisplayWeather";
import UserForm from "./components/UserForm";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey,} from '@mui/material/colors';
import { dark } from "@mui/material/styles/createPalette";

function App() {


  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: grey[50],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (

    <ThemeProvider theme={theme}>


    <div className="App">

    <DisplayWeather/>

    <UserForm />


    </div>

  </ThemeProvider>


  )

}

export default App;
