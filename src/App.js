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
                Hey there! My name is Harrison Leath, and I am currently a
                senior in high school. I have a passion for creating exciting
                projects, so it's super convenient that I love programming. I
                began developing watchfaces in C for the Pebble Smartwatch back
                in 2014, and I've open sourced many of my projects since then!
                Currently, I am busy supporting my iOS app, Jotify. Feel free to
                contact me.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box background="#41658a" overflow="hidden">
        <Box
          margin="auto"
          alignContent="center"
          width={{ min: "75%", max: "900px" }}
          pad={{
            top: "medium",
            bottom: "xlarge",
            left: "large",
            right: "large",
          }}
        >
          <Heading margin={{ top: "large", bottom: "large" }}>Projects</Heading>
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
