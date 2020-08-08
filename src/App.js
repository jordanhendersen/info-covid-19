import React, { useState } from 'react';
import { ThemeProvider, IconButton, Tooltip } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from './utils/RootStyles';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';

import styles from './App.module.css';
import Home from './Pages/Home/Home.component.jsx';
import Footer from './components/Footer/Footer.component.jsx';

const useStyles = makeStyles({
  iconButton: {
    textAlign: 'right',
    paddingRight: '1em',
  },
});

const App = () => {
  const classes = useStyles();

  const [theme, setTheme] = useState(true);
  const icon = !theme ? (
    <Brightness7RoundedIcon fontSize='large' />
  ) : (
    <Brightness4RoundedIcon fontSize='large' />
  );
  const appliedTheme = createMuiTheme(theme ? themeLight : themeDark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <div className={styles.paddingVertical}>
        <div className={styles.container}>
          <CssBaseline />
          <div className={classes.iconButton}>
            <Tooltip title='Toggle light/dark theme'>
              <IconButton
                edge='end'
                color='inherit'
                aria-label='Toggle light/dark theme'
                onClick={() => setTheme(!theme)}
              >
                {icon}
              </IconButton>
            </Tooltip>
          </div>

          <Home theme={theme} />

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
