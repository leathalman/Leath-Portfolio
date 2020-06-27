import React, { Component } from "react";
import { style } from "typestyle/lib";

const profilePicture = style({
  width: 100,
  height: 100,

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
        <img
          src='https://res.cloudinary.com/valkhrist/image/upload/w_640,q_100/v1573010427/mountains.jpg'
          alt=''
        />
      </div>
    );
  }
}

export default ProfilePicture;
