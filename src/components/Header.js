import React from "react";
import { Box, Heading, Paragraph } from "grommet";

function Header() {
  return (
    <Box>
      <Heading
        style={{ lineHeight: 1.1, fontSize: 60, color: "#28C6A9" }}
        margin={{
          bottom: "xsmall",
        }}
      >
        Harrison Leath
      </Heading>
      <Paragraph fill style={{ lineHeight: 2.0 }}>
        I am a mobile developer specializing in the creation of native iOS
        applications using Swift. I am also currently studying the React
        JavaScript library to become a proficient web developer. Check out my
        <a href='#projects'> projects</a> below.
      </Paragraph>
    </Box>
  );
}

export default Header;
