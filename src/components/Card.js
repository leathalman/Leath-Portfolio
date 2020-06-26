import "./Card.css";
import React from "react";
import { Box, Heading, Text } from "grommet";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      img: props.img,
    };
  }

  render() {
    return (
      <Box
        // margin={{ top: "medium" }}
        style={{
          boxShadow: "0px 0px 5px 0px rgba(68,68,68,0.67)",
          borderRadius: "14px",
        }}
        background='#ffffff'
      >
        <Box direction='row'>
          <Box
            width='30%'
            height='auto'
            margin={{
              top: "",
              bottom: "",
              right: "medium",
              left: "",
            }}
          >
            <img
              id='optionalstuff'
              src={this.props.img}
              alt='Jotify Icon'
            ></img>
          </Box>
          <Box
            margin={{
              top: "xxsmall",
              bottom: "medium",
              right: "small",
              left: "medium",
            }}
            width='85%'
          >
            <Heading responsive level='2'>
              {this.props.title}
            </Heading>
            <Text>{this.props.content}</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Card;
