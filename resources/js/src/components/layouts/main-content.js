import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  mainContent: {
    flex: 1,
    padding: '20px 36px',
    background: 'white',
  },
});

const MainContent = ({classes, children}) => {
  return (
    <div className={classes.mainContent}>
      {children}
    </div>
  );
}

export default withStyles(styles)(MainContent);