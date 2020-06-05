import React from "react";
import { Box, Paragraph, Text } from "grommet";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title, content: props.content, img: props.img };
  }

  render() {
    return (
      <Box
        margin={{ top: "medium" }}
        style={{
          boxShadow: "0px 0px 10px 0px rgba(68,68,68,0.67)",
          borderRadius: "6px",
        }}
      >
        <Box direction='row-responsive'>
          <Box>
            <img
              src={this.props.img}
              alt='Jotify Icon'
              width='250'
              height='250'
            ></img>
          </Box>
          <Box>
            <Paragraph>{this.props.title}</Paragraph>
            <Text>{this.props.content}</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Card;
