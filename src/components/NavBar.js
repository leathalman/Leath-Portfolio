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
        align='end'
        pad={{
          top: "large",
          bottom: "medium",
          right: "xxsmall",
        }}
      >
        <Text
          className='underline'
          style={{ fontSize: 22, color: this.props.headerTextColor }}
          margin={{
            right: "medium",
          }}
        >
          <a href='#contact'>Contact</a>
        </Text>
        <Text
          className='underline'
          style={{ fontSize: 22, color: this.props.headerTextColor }}
        >
          <a href='https://github.com/leathalman'>Github</a>
        </Text>
      </Header>
    );
  }
}

export default NavBar;
