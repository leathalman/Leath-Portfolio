import "./App.css";
import React from "react";

import { Box, Grommet, Heading } from "grommet";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Slider from "./components/Slider";
import Projects from "./components/Projects";
import ProfilePicture from "./components/ProfilePicture";

import bio from "./content/About-Me";

function App() {
  return (
    <Grommet background='light-2'>
      <Box
        margin='auto'
        width={{ min: "75%", max: "900px" }}
        pad={{
          top: "medium",
          bottom: "xlarge",
          left: "large",
          right: "large",
        }}
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
              <Box alignSelf='center'>
                <ProfilePicture></ProfilePicture>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box background='#41658a' overflow='hidden'>
        <Box
          margin='auto'
          width={{ min: "75%", max: "550px" }}
          pad={{
            top: "medium",
            bottom: "medium",
            left: "large",
            right: "large",
          }}
        >
          <Heading size='large'>Projects</Heading>
          {/* <Box align='left' margin={{ top: "xlarge", bottom: "large" }}>
            <img
              alt='Projects'
              width='50%'
              height='25%'
              src={require("./images/projects.svg")}
            />
          </Box> */}
          <Projects />
          <Box>Hello there</Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
