/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FaCocktail } from "react-icons/fa";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@material-ui/core/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd900'
    },
    secondary: {
      main: '#03636d'
    }
  }
});

function Header() {

  return (
    <header style={{ backgroundColor: 'black', borderBottom: "10px solid gold" }}>
      <Container maxWidth="xl" >

        <Grid container justifyContent="space-between" alignItems="center">

          <Grid container item xs={1} justifyContent="center" alignItems="center">
            <FaCocktail size={80} style={{ color: 'gold' }} />
          </Grid>

          <Grid item xs={9}>
            <Typography style={{ color: 'white', fontSize: 45, fontWeight: 800, marginTop: '10px'}}> {'The Cocktail Compendium'}</Typography>
            <Typography style={{ color: 'grey', fontSize: 25, fontWeight: 600, marginBottom: '10px' }}> {'Make Various Potions'}</Typography>
          </Grid>

          <ThemeProvider theme={theme}>
            <Grid container style={{ justifyContent: 'center' }} item xs={2}>
              <Button variant="contained" color="secondary" >
              <Typography>
                  {'Favorites '}
                </Typography>
                <FavoriteIcon style={{ justifyContent: 'center', marginLeft: '4px '}} />
              </Button>
            </Grid>
          </ThemeProvider>

        </Grid>

      </Container>
    </header>
  )
}

export default Header;