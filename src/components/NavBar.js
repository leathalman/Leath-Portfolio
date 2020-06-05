import React from "react";
import { Header, Text } from "grommet";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerTextColor: props.headerTextColor };
  }

  render() {
    return (
      <Header
        className='header-label'
        justify='end'
        pad={{
          top: "large",
          bottom: "medium",
          left: "medium",
          right: "xlarge",
        }}
      >
        <Text
          className='underline'
          style={{ fontSize: 20, color: this.props.headerTextColor }}
          margin={{
            right: "medium",
          }}
        >
          Contact
        </Text>
        <Text
          className='underline'
          style={{ fontSize: 20, color: this.props.headerTextColor }}
        >
          Github
        </Text>
      </Header>
    );
  }
}

export default NavBar;
