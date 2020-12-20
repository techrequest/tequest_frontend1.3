import { Breadcrumbs, Container } from '@material-ui/core';
import React from 'react';
import TeQuestHeader from './TeQuestHeader';

function AboutScreen () {
  return (
    <div className="App">
      <TeQuestHeader></TeQuestHeader>
      <Container>
          
          <h3>About Us</h3>
          
         
      </Container>
    </div>
  );
}

export default AboutScreen;