import React from "react";
import { Box, Heading, Text } from "grommet";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      img: props.img,
      imgHeight: props.imgHeight,
      imgWidth: props.imgWidth,
    };
  }

  render() {
    return (
      <Box
        margin={{ top: "medium" }}
        style={{
          boxShadow: "0px 0px 5px 0px rgba(68,68,68,0.67)",
          borderRadius: "14px",
        }}
      >
        <Box direction='row'>
          <Box>
            <img
              src={this.props.img}
              alt='Jotify Icon'
              width={this.props.imgWidth}
              height={this.props.imgHeight}
            ></img>
          </Box>
          <Box
            margin={{
              top: "xxsmall",
              bottom: "small",
              right: "small",
              left: "medium",
            }}
            width='70%'
          >
            <Heading level='3'>{this.props.title}</Heading>
            <Text>{this.props.content}</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Card;
