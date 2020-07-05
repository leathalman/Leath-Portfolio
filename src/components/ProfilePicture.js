import React, { Component } from "react";
import { style } from "typestyle/lib";

const profilePicture = style({
  width: 200,
  height: 200,

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
        <img src={require("../images/profile3.jpg")} alt="" />
      </div>
    );
  }
}

export default ProfilePicture;
