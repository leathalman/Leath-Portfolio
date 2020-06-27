import React from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Card
          image={require("../images/jotify.jpg")}
          centered
          onClick='https://apps.apple.com/us/app/jotify/id1469983730'
          title='Jotify - iOS App'
          text='Beautiful. Private. Simple. The classic privacy based iOS note-taking app. The fastest way to jot down notes on the go. Completely open source under the Apache-2.0 License.'
        />
        <Card
          image={require("../images/connect.jpg")}
          centered
          onClick='https://leathalman.github.io/CBSJohnsCreek/'
          title='CBS Johns Creek Website'
          text='The website for Community Bible Study Johns Creek. This version is avaliable open-soure.'
        />
        <Card
          image={require("../images/jotify-gold.jpg")}
          centered
          onClick='https://www.jotifyapp.com'
          title='Official Jotify Website'
          text='The offical Jotify website. You can check it out here.'
        />
        <Card
          image={require("../images/firebase.jpg")}
          centered
          onClick='https://github.com/leathalman/Swift-FirebaseMessager'
          title='Swift Firebase Messenger'
          text='A simple chat application written in swift which uses for Firebase for user authentication and storing messages. Completely open source.'
        />
        <Card
          image={require("../images/dash.jpg")}
          centered
          onClick='https://github.com/leathalman/DashButton'
          title='Custom IoT Dashbutton'
          text='Use Python to enable actions with an Amaon Dash button. These are python scripts that I wrote which allow a user to assign any function they want on button press through IFTTT.'
        />
      </Grid>
    );
  }
}

export default Projects;
