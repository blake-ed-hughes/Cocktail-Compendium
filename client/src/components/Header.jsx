/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FaCocktail } from "react-icons/fa";

function Header() {

  return (
    <header style={{ backgroundColor: 'black', borderBottom: "10px solid gold" }}>
      <Container maxWidth="xl" >

        <Grid container justifyContent="space-between" alignItems="center">

          <Grid container item xs={1} justifyContent="center" alignItems="center">
            <FaCocktail size={80} style={{ color: 'gold' }} />
          </Grid>

          <Grid item xs={11}>
            <h1 style={{ color: 'white' }} >The Cocktail Compendium</h1>
            <h3 style={{ color: 'grey' }}>"Make Various Potions"</h3>
          </Grid>

        </Grid>

      </Container>
    </header>
  )
}

export default Header;