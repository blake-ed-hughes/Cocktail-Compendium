import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from '@material-ui/core/Paper';

// const theme = createTheme({
//   palette: {
//     default: 'grey'
//   }

// });
const styles = {
  paperContainer: {
    backgroundColor: '#434343'
    // backgroundSize: 'cover',
    // backgroundImage: `url(${"https://img.wallpapersafari.com/desktop/1366/768/19/53/9fjkpT.jpg"})`
  }
};

class App extends React.Component {

  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      //   <CssBaseline />
      <Paper style={styles.paperContainer}>
        <div>
          <Header />
          <Main />
        </div>
        </Paper>
      // </MuiThemeProvider>
    );
  }
}

export default App;