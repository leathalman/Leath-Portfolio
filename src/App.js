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
                Hey there! I’m Harrison Leath, and I’m a senior in high school
                with a passion for creating beautiful software. I’m currently
                busy working on my iOS app, Jotify. My work is part of the 2020
                Arctic Code Vault Program - meaning my software is sitting 250
                meters underground in the Arctic, so that’s pretty cool. My work
                has also been featured in various projects across GitHub (see
                above). Feel free to drop by and say hi!
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
