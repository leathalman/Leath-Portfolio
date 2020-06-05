import React from "react";
import "./App.css";
import { Box, Grommet, Heading, Main } from "grommet";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <Grommet full background='light-1'>
      <Box>
        <Box margin='auto' width='75%' justify='center'>
          <NavBar headerTextColor='#444444'></NavBar>
        </Box>
        <Main
          pad={{
            top: "medium",
            bottom: "medium",
            left: "large",
            right: "large",
          }}
          margin='auto'
          width='75%'
          justify='center'
        >
          <Header />
          <Box
            margin={{
              top: "medium",
            }}
          >
            <Box>
              <Heading
                style={{ lineHeight: 1.1, fontSize: 40, color: "#444444" }}
              >
                Bio
              </Heading>
              <Profile></Profile>
            </Box>
            <Box>
              <Heading
                style={{ lineHeight: 1.1, fontSize: 40, color: "#444444" }}
              >
                Projects
              </Heading>
              <Card title='Jotify'></Card>
              <Card title='Jotify Website'></Card>
              <Card title='DashButton'></Card>
              <Card title='CBS Johns Creek'></Card>
            </Box>
          </Box>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;
