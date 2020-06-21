import React from "react";
import "./App.css";
import { Box, Grommet, Heading, Main } from "grommet";
import NavBar from "./components/NavBar";
// eslint-disable-next-line
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/About";
import Slider from "./components/Slider";

import bio from "./content/About-Me";

function App() {
  return (
    /* Not sure if light-1 or 2 works better here */
    <Grommet background='light-2'>
      {/* <Box margin='auto' width='90%'> */}
      <Box margin='auto' width={{ min: "75%", max: "900px" }}>
        <NavBar headerTextColor='#444444'></NavBar>
        <Main
          pad={{
            top: "medium",
            bottom: "medium",
            left: "large",
            right: "large",
          }}
        >
          {/* <Header /> */}
          <Box width='100vh' height='50vh' margin={{ top: "large" }}>
            <Slider />
          </Box>
          <Box>
            <Box
              margin={{
                top: "large",
              }}
            >
              <About statements={bio} />
              {/* <Profile></Profile> */}
            </Box>
            <Box>
              <Heading
                style={{ lineHeight: 1.1, fontSize: 40, color: "#444444" }}
                id='projects'
              >
                Projects
              </Heading>
              <Card
                title='Jotify'
                content='Jotify makes note taking easy with a beautiful user interface. Secure, simple, and blazing fast, Jotify is the perfect companion for your jots and reminders. It is completely open source! Fork it on github :)'
                img={require("./images/jotify.jpg")}
                imgWidth='250'
                imgHeight='250'
              ></Card>
              <Card
                title='Swift Firebase Messenger'
                content='A simple chat application written in swift which uses Firebase for user authentication and storing messages. Completely open source on my github! '
                img={require("./images/jotify.jpg")}
                imgWidth='250'
                imgHeight='250'
              ></Card>
              <Card
                title='Custom DashButton'
                content='Use Python to enable actions with an Amazon Dash button. These are python scripts that I wrote which allow a user to assign any function they want on button press through IFTTT.'
                img={require("./images/jotify.jpg")}
                imgWidth='250'
                imgHeight='250'
              ></Card>
              <Card
                title='Jotify Website'
                content={
                  "The official Jotify website. You can check it out here."
                }
                img={require("./images/jotify.jpg")}
                imgWidth='250'
                imgHeight='250'
              ></Card>
              <Card
                title='CBS Johns Creek'
                content='The website for Community Bible Study Johns Creek. This is a partily completed version of the project, avaliable open-source.'
                img={require("./images/jotify.jpg")}
                imgWidth='250'
                imgHeight='250'
              ></Card>
            </Box>
          </Box>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;
