import "./App.css";
import "./Helper/Background";
import React from "react";

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
    <Grommet id='bgcontainer' className='colorChange' background='light-2'>
      <Main
        id='block'
        pad={{
          top: "medium",
          bottom: "medium",
          left: "large",
          right: "large",
        }}
        margin='auto'
        width={{ min: "75%", max: "900px" }}
      >
        <Box>
          <NavBar headerTextColor='#444444'></NavBar>
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
          </Box>
        </Box>
        <Box margin={{ top: "large", bottom: "large" }}>
          <Heading
            className='textColorChange'
            id='projects'
            style={{ lineHeight: 1.1, fontSize: 40 }}
          >
            My Recent Work
          </Heading>
          <Card
            title='Jotify'
            content='Jotify makes note taking easy with a beautiful user interface. Secure, simple, and blazing fast, Jotify is the perfect companion for your jots and reminders.'
            img={require("./images/jotify.jpg")}
          ></Card>
          <Card
            title='Swift Firebase Messenger'
            content='A simple chat application written in swift which uses Firebase for user authentication and storing messages. Completely open source on my github! '
            img={require("./images/jotify.jpg")}
          ></Card>
          <Card
            title='Custom DashButton'
            content='Use Python to enable actions with an Amazon Dash button. These are python scripts that I wrote which allow a user to assign any function they want on button press through IFTTT.'
            img={require("./images/jotify.jpg")}
          ></Card>
          <Card
            title='Jotify Website'
            content={"The official Jotify website. You can check it out here."}
            img={require("./images/jotify.jpg")}
          ></Card>
          <Card
            title='CBS Johns Creek'
            content='The website for Community Bible Study Johns Creek. This is a partily completed version of the project, avaliable open-source.'
            img={require("./images/jotify.jpg")}
          ></Card>
        </Box>
      </Main>
    </Grommet>
  );
}

export default App;
