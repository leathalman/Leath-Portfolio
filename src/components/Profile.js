import React from "react";
import { Box, Text } from "grommet";
import { ReactComponent as ProfileLogo } from "../images/animated.svg";

class Profile extends React.Component {
  render() {
    return (
      <Box style={{ boxshadow: "10px, 5px, 5px, red" }} background='black'>
        <Box width='50%' margin='auto' justify='center' alignContent='center'>
          <Box width='55%' margin='auto'>
            <ProfileLogo />
          </Box>
          <Text margin='auto'>Hello there!</Text>
        </Box>
      </Box>
    );
  }
}

export default Profile;
