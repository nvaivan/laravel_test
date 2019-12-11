import React from 'react';

import { withStyles } from '@material-ui/core';
import Header from './../../components/layouts/header';
import MainContent from '../../components/layouts/main-content';

const styles = theme => ({
  mainContent: {
    flex: 1,
    padding: '20px 36px',
    background: 'white',
  },
});

const HomePage = ({classes}) => {
  return (
    <>
      <Header>
        Document 
      </Header>
      <MainContent>
            <h3>
                Please select the document which you want show
            </h3>
      </MainContent>
    </>
  );
}

export default withStyles(styles)(HomePage);