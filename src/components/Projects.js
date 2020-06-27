import React from "react";
import { Box } from "grommet";
import Card from "../components/Card";
import Grid from "../components/Grid"

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Card
          image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
          title='React Milkshake Starterkit'
          text='Start building some stuff with styled cards like this'
          className='example-card'
        />
        <Card
          image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
          title='React Milkshake Starterkit'
          text='Start building some stuff with styled cards like this'
          className='example-card'
        />
        <Card
          image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
          title='React Milkshake Starterkit'
          text='Start building some stuff with styled cards like this'
          className='example-card'
        />
        <Card
          image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
          title='React Milkshake Starterkit'
          text='Start building some stuff with styled cards like this'
          className='example-card'
        />
      </Grid>
    );
  }
}

export default Projects;
