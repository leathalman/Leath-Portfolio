import React from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";
// import { Box, Grid } from "grommet";

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Card
          image={require("../images/jotify.jpg")}
          centered
          onClick="https://apps.apple.com/us/app/jotify/id1469983730"
          title="Jotify - iOS App"
          text={
            "Jotify makes note taking easy with a beautiful user interface. Secure, simple, and blazing fast, Jotify is the perfect companion for your jots and reminders. Completely open source under the Apache-2.0 License."
          }
        />
        <Card
          image={require("../images/connect.jpg")}
          centered
          onClick="https://leathalman.github.io/CBSJohnsCreek/"
          title="CBS Johns Creek Website"
          text="The website for Community Bible Study Johns Creek which allows prospective members to sign up through Google Forms integration. This version is avaliable open soure."
        />
        <Card
          image={require("../images/jotify-gold.jpg")}
          centered
          onClick="https://www.jotifyapp.com"
          title="Official Jotify Website"
          text="The offical website used to promote the Jotify iOS application. Check it out below."
        />
        <Card
          image={require("../images/firebase.jpg")}
          centered
          onClick="https://github.com/leathalman/Swift-FirebaseMessager"
          title="Swift Firebase Messenger"
          text="An open source application for cloud-based instant messaging. This application is written in Swift and uses Firebase for storing messages."
        />
        <Card
          image={require("../images/dash.jpg")}
          centered
          onClick="https://github.com/leathalman/DashButton"
          title="Custom IoT Dashbutton"
          text="A script written in Python which enables customizable actions with an Amazon Dash Button. Actions are also user assignable through IFTTT."
        />
      </Grid>
    );
  }
}

export default Projects;
