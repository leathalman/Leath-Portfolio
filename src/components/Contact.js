import "./Contact.css";
import React from "react";
import { Box, Text } from "grommet";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerTextColor: props.headerTextColor };
  }

  render() {
    return (
      <Box margin="auto" width="100%">
        <Box pad={{ top: "medium", bottom: "large" }}>
          <Text id="contact" size="32px" textAlign="center">
            Contact Me!
          </Text>
        </Box>
        <Box
          responsive
          direction="row-responsive"
          margin="auto"
          gap="medium"
          pad={{
            top: "20px",
          }}
        >
          <Text textAlign="center">
            <a className="underline" href="https://github.com/leathalman">
              GitHub
            </a>
          </Text>
          <Text className="block" textAlign="center">
            ||
          </Text>
          <Text textAlign="center">
            <a className="underline" href="mailto:h@harrisonleath.me">
              h@harrisonleath.me
            </a>
          </Text>
          <Text className="block" textAlign="center">
            ||
          </Text>
          <Text textAlign="center">
            <a className="underline" href="coming-soon">
              LinkedIn
            </a>
          </Text>
        </Box>
        <Box pad={{ top: "20px", bottom: "large" }}></Box>
        <Text size="small" margin="auto" pad={{ top: "large" }}>
          Made by Harrison Leath © {new Date().getFullYear()}
        </Text>
        <Box pad={{ top: "25px" }}></Box>
      </Box>
    );
  }
}

export default Contact;
