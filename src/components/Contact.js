import React from "react";
import { Box, Footer, Heading, Text } from "grommet";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerTextColor: props.headerTextColor };
  }

  render() {
    return (
      <Box>
        <Footer
          pad={{
            top: "large",
            bottom: "90px",
          }}
        >
          <Heading id="contact" level="2" textAlign="center" margin="auto">
            Contact Me!
            <Box
              responsive
              direction="row"
              margin="auto"
              gap="medium"
              pad={{
                top: "90px",
              }}
            >
              <Text className="underline">
                <a href="https://github.com/leathalman">GitHub</a>
              </Text>
              <Text>||</Text>
              <Text className="underline">hleath@me.com</Text>
              <Text>||</Text>
              <Text className="underline">
                <a href="coming-soon">LinkedIn</a>
              </Text>
            </Box>
          </Heading>
        </Footer>
        <Text size="small" margin="auto" style={{ lineHeight: "3.5em" }}>
          Made by Harrison Leath © {new Date().getFullYear()}
        </Text>
      </Box>
    );
  }
}

export default Contact;
