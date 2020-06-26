import "./App.css";
import React from "react";

import { Box, Grid, Grommet, Heading, Main } from "grommet";
import NavBar from "./components/NavBar";
// eslint-disable-next-line
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/About";
import Slider from "./components/Slider";

import bio from "./content/About-Me";

function App() {
  return (
    <Grommet background='light-2'>
      <Main width={{ min: "75%", max: "900px" }} margin='auto'>
        <Box
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
              {/* <Slider /> */}
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
        </Box>
        <Box
          pad={{
            top: "medium",
            bottom: "xlarge",
            left: "large",
            right: "large",
          }}
          background='#41658a'
        >
          <Box gap='medium'>
            <Heading
              id='projects'
              style={{
                lineHeight: 1.1,
                fontSize: 40,
              }}
            >
              My Recent Work
            </Heading>
            {/* <Grid
            rows={["medium", "medium", "medium"]}
            columns={["fill", "fill"]}
            gap='small'
            areas={[
              { name: "other", start: [0, 0], end: [0, 0] },
              { name: "other2", start: [0, 1], end: [0, 1] },
              { name: "other3", start: [0, 2], end: [0, 2] },
              { name: "other4", start: [1, 0], end: [1, 0] },
              { name: "other5", start: [1, 1], end: [1, 1] },
              { name: "other6", start: [1, 2], end: [1, 2] },
            ]}
          >
            <Box width='20%' height='auto' gridArea='other' background='brand'>
              <img
                src={require("./images/jotifySmall.jpg")}
                alt='Jotify Icon'
              ></img>
            </Box>
            <Box gridArea='other2' background='light-5' />
            <Box gridArea='other3' background='light-2' />
            <Box gridArea='other4' background='brand' />
            <Box gridArea='other5' background='light-5' />
            <Box gridArea='other6' background='light-2' />
          </Grid> */}
            <Card
              title='Swift Firebase Messenger'
              content='A simple chat application written in swift which uses Firebase for user authentication and storing messages. Completely open source on my github! '
              img={require("./images/jotifySmall.jpg")}
            ></Card>
            <Card
              title='Custom DashButton'
              content='Use Python to enable actions with an Amazon Dash button. These are python scripts that I wrote which allow a user to assign any function they want on button press through IFTTT.'
              img={require("./images/jotifySmall.jpg")}
            ></Card>
            <Card
              title='Jotify Website'
              content={
                "The official Jotify website. You can check it out here."
              }
              img={require("./images/jotifySmall.jpg")}
            ></Card>
            <Card
              title='CBS Johns Creek'
              content='The website for Community Bible Study Johns Creek. This is a partily completed version of the project, avaliable open-source.'
              img={require("./images/jotifySmall.jpg")}
            ></Card>
          </Box>
        </Box>
      </Main>
    </Grommet>
  );
}

export default App;
