import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

export default function App() {
  return (
    <div id="light" className='h-100'>
      <Container maxwidth='lg'>
        <AppBar position='static' color='inherit'>
          <Typography variant='h2' align='center'>
            Memories
          </Typography>
          <img  alt='memories' height='60'/>
        </AppBar> 
        <Grow in>
          <Container>
            <Grid container justify='space-between' aligments='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow> 
      </Container>		
    </div>
  );
}