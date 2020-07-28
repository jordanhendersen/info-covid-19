import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Logo from '../../assets/coronavirus.svg';

const useStyles = makeStyles({
  headerContainer: {
    padding: '1em',
  },
  headerMain: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '2.25em',
    width: '2.25em',
    marginRight: '.6em',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div>
        <div className={classes.headerMain}>
          <div>
            <Logo className={classes.logo} />
          </div>
          <Typography component='h1' className={classes.title}>
            INFO COVID-19
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;