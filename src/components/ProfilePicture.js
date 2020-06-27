import React, { Component } from "react";
import { style } from "typestyle/lib";

const profilePicture = style({
  width: 150,
  height: 150,

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "solid 5px #ddd",
  },
});

class ProfilePicture extends Component {
  render() {
    return (
      <div className={profilePicture}>
        <img src={require("../images/profile.jpg")} alt='' />
      </div>
    );
  }
}

export default ProfilePicture;
