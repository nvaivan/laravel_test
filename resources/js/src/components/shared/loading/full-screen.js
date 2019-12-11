import React from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  loading__wrapper: {
    display: 'table',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: 'black',
    opacity: '0.5',
    width: '100%',
    height: '100%',
    zIndex: 999
  },
  loading__inner : {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  loading__icon: {
  }
});
const FullScreenLoading = ({classes}) => {
  return (
    <div className={classes.loading__wrapper}>
      <div className={classes.loading__inner}>
        <CircularProgress className={classes.loading__icon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(FullScreenLoading);