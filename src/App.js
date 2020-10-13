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
                Hey there! I’m Harrison Leath, and I’m a student with a passion
                for creating beautiful software. I founded my company,{" "}
                <a
                  className="underline"
                  href="https://www.leathalenterprises.com"
                >
                  Leathal Enterprises LLC
                </a>
                , and have been hard at work supporting my iOS app,{" "}
                <a className="underline" href="https://www.jotifyapp.com">
                  Jotify
                </a>
                . Jotify has been featured by Apple in over 200 countries on the
                App Store with thousands of users to date. My work has been a
                part of various projects aross GitHub, and I'm always working on
                something new! Feel free to drop by and say hi!
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
