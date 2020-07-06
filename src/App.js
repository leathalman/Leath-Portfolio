import "./App.css";
import React from "react";

import { Box, Grommet, Heading, Text } from "grommet";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Slider from "./components/Slider";
import Projects from "./components/Projects";
import ProfilePicture from "./components/ProfilePicture";
import Contact from "./components/Contact";

import bio from "./content/About-Me";

function App() {
  return (
    <Grommet background="light-2">
      <Box
        margin="auto"
        width={{ min: "75%", max: "900px" }}
        pad={{
          top: "medium",
          bottom: "xlarge",
          left: "large",
          right: "large",
        }}
      >
        <Box>
          <NavBar headerTextColor="#444444"></NavBar>
          <Box width="100vh" height="50vh" margin={{ top: "75px" }}>
            <Slider />
          </Box>
          <Box>
            <Box
              margin={{
                top: "large",
                bottom: "large",
              }}
            >
              <About statements={bio} />
              <Heading margin={{ top: "xlarge" }}>About Me</Heading>
              <Box alignSelf="center" margin={{ top: "45px", bottom: "65px" }}>
                <ProfilePicture></ProfilePicture>
              </Box>
              <Text>
                I am a mobile developer specializing in the creation of native
                iOS applications using Swift. I am also currently studying the
                React JavaScript library to become a proficient web developer.
                Check out my projects below!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box background="#41658a" overflow="hidden">
        <Box
          margin="auto"
          alignContent="center"
          width={{ min: "70%", max: "500px" }}
          pad={{
            top: "medium",
            bottom: "xlarge",
            left: "large",
            right: "large",
          }}
        >
          <Heading>Projects</Heading>
          <Projects />
        </Box>
      </Box>
      <Box background="light-2" overflow="hidden">
        <Box
          margin="auto"
          // width={{ min: "50%", max: "1050px" }}
          width="100%"
          pad={{
            top: "medium",
            bottom: "medium",
            left: "large",
            right: "large",
          }}
        >
          <Contact />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
