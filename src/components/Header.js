import React from "react";
import { Box, Heading, Paragraph } from "grommet";

class Header extends React.Component {
  render() {
    return (
      <Box>
        <Heading
          style={{ lineHeight: 1.1, fontSize: 60, color: "#28C6A9" }}
          margin={{
            top: "",
            bottom: "xsmall",
            left: "",
            right: "",
          }}
        >
          Harrison Leath
        </Heading>
        <Paragraph fill style={{ lineHeight: 1.75 }}>
          I am a mobile developer specializing in the creation of native iOS
          applications using Swift. I am also currently studying the React
          JavaScript library to become a proficient web developer. Check out my
          <a href='#projects'> projects</a> below.
        </Paragraph>
      </Box>
    );
  }
}

export default Header;
