import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DrinkPhoto from './DrinkPhoto.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  bold: {
    fontWeight: 600
  },
  hover: {
    color: 'grey',
    '&:hover': {
      color: 'blue',
    }
  }
}));

function DrinkTile({drinkData}) {
  console.log('a drink -> ', drinkData)
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container>

      <Grid item container justifyContent="center" alignItems="center" style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '26px' }} xs={3}  >
      <DrinkPhoto photo={drinkData.strDrinkThumb} key={drinkData.strDrinkThumb} />
      </Grid>

        <Grid item xs={8} >
          <Paper elevation={0} className={classes.paper}>
            <Typography className={classes.bold} style={{ marginBottom: '6px', color: 'black'}} display="inline">
              {'Name: '}
            </Typography>
            <Typography className={classes.bold} style={{ color: '#03636d'}} display="inline">
              {drinkData.strDrink}
            </Typography>
            <Typography className={classes.bold} style={{color: 'black', borderTop: '2px solid #D3D3D3'}}>
              {'Ingredients:'}
            </Typography>
            {drinkData.strMeasure1 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure1 + ' ' + drinkData.strIngredient1}
            </Typography>
            )}
            {drinkData.strMeasure2 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure2 + ' ' + drinkData.strIngredient2}
            </Typography>
            )}
            {drinkData.strMeasure3 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure3 + ' ' + drinkData.strIngredient3}
            </Typography>
            )}
            {drinkData.strMeasure4 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure4 + ' ' + drinkData.strIngredient4}
            </Typography>
            )}
            {drinkData.strMeasure5 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure5 + ' ' + drinkData.strIngredient5}
            </Typography>
            )}
            {drinkData.strMeasure6 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure6 + ' ' + drinkData.strIngredient6}
            </Typography>
            )}
            {drinkData.strMeasure7 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure7 + ' ' + drinkData.strIngredient7}
            </Typography>
            )}
            {drinkData.strMeasure8 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure8 + ' ' + drinkData.strIngredient8}
            </Typography>
            )}
            {drinkData.strMeasure9 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure9 + ' ' + drinkData.strIngredient9}
            </Typography>
            )}
            {drinkData.strMeasure10 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure10 + ' ' + drinkData.strIngredient10}
            </Typography>
            )}
            {drinkData.strMeasure11 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure11 + ' ' + drinkData.strIngredient11}
            </Typography>
            )}
            {drinkData.strMeasure12 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure12 + ' ' + drinkData.strIngredient12}
            </Typography>
            )}
            {drinkData.strMeasure13 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure13 + ' ' + drinkData.strIngredient13}
            </Typography>
            )}
            {drinkData.strMeasure14 && (
            <Typography className={classes.bold}>
              {'- ' + drinkData.strMeasure14 + ' ' + drinkData.strIngredient14}
            </Typography>
            )}
            {drinkData.strMeasure15 && (
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {'- ' + drinkData.strMeasure15 + ' ' + drinkData.strIngredient15}
            </Typography>
            )}
            <Typography className={classes.bold} style={{ marginTop: '6px', color: 'black', borderTop: '2px solid #D3D3D3' }} >
              {'Instructions: '}
            </Typography>
            <Typography className={classes.bold} style={{ color: '#3f3737'}}>
              {drinkData.strInstructions}
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

export default DrinkTile;