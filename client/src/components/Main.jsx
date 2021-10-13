import React from 'react';
import axios from 'axios';
import DrinkTile from './DrinkTile.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'start-flex',
    color: theme.palette.text.secondary,
  },
  gridWrapper: {
    border: "1px solid grey"
  },
  formControl: {
    minWidth: '50%'
  },
  bold: {
    fontWeight: 800
  }
}));

function Main() {

  const classes = useStyles();

  const [drinkCollection, SetDrinkCollection] = useState(
  [{
    "idDrink": "11004",
    "strDrink": "Whiskey Sour",
    "strDrinkAlternate": null,
    "strTags": "IBA,Classic,Alcoholic,ContemporaryClassic",
    "strVideo": "https://www.youtube.com/watch?v=hFKZPzfngcU",
    "strCategory": "Ordinary Drink",
    "strIBA": "Unforgettables",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Old-fashioned glass",
    "strInstructions": "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
    "strInstructionsES": null,
    "strInstructionsDE": "Mit Eis schütteln. In ein gekühltes Glas abseihen, garnieren und servieren. Wenn Sie \"On the rocks\" servieren, die Zutaten in ein old-fashioned, mit Eis gefülltes Glas geben.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Shakerare con ghiaccio.Filtrare in un bicchiere freddo, guarnire e servire.Se servito \"On the rocks\", filtra gli ingredienti in un bicchiere vecchio stile pieno di ghiaccio.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    "strIngredient1": "Blended whiskey",
    "strIngredient2": "Lemon",
    "strIngredient3": "Powdered sugar",
    "strIngredient4": "Cherry",
    "strIngredient5": "Lemon",
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "2 oz ",
    "strMeasure2": "Juice of 1/2 ",
    "strMeasure3": "1/2 tsp ",
    "strMeasure4": "1 ",
    "strMeasure5": "1/2 slice ",
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0191.jpg",
    "strImageAttribution": "Ralf Roletschek https://www.wikidata.org/wiki/Q15080600",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2017-09-02 12:45:25"
  },
  {
    "idDrink": "11000",
    "strDrink": "Mojito",
    "strDrinkAlternate": null,
    "strTags": "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild",
    "strVideo": null,
    "strCategory": "Cocktail",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Highball glass",
    "strInstructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
    "strInstructionsES": null,
    "strInstructionsDE": "Minzblätter mit Zucker und Limettensaft verrühren. Füge einen Spritzer Sodawasser hinzu und fülle das Glas mit gebrochenem Eis. Den Rum eingießen und mit Sodawasser übergießen. Garnieren und mit einem Strohhalm servieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Pestare le foglie di menta con lo zucchero e il succo di lime.\r\nAggiungere una spruzzata di acqua di seltz e riempi il bicchiere con ghiaccio tritato.\r\nVersare il rum e riempire con acqua di seltz.\r\nGuarnire con una fetta di lime, servire con una cannuccia.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    "strIngredient1": "Light rum",
    "strIngredient2": "Lime",
    "strIngredient3": "Sugar",
    "strIngredient4": "Mint",
    "strIngredient5": "Soda water",
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "2-3 oz ",
    "strMeasure2": "Juice of 1 ",
    "strMeasure3": "2 tsp ",
    "strMeasure4": "2-4 ",
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/",
    "strImageAttribution": "anilaha https://pixabay.com/users/anilaha-16242978/",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2016-11-04 09:17:09"
  },
  {
    "idDrink": "11690",
    "strDrink": "Mai Tai",
    "strDrinkAlternate": null,
    "strTags": "IBA,ContemporaryClassic",
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Collins glass",
    "strInstructions": "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
    "strInstructionsES": null,
    "strInstructionsDE": "Alle Zutaten mit Eis schütteln. In ein Glas abseihen. Garnieren und mit Trinkhalm servieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Shakerare tutti gli ingredienti con ghiaccio.Filtrare nel bicchiere. ",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    "strIngredient1": "Light rum",
    "strIngredient2": "Orgeat syrup",
    "strIngredient3": "Triple sec",
    "strIngredient4": "Sweet and sour",
    "strIngredient5": "Cherry",
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1 oz ",
    "strMeasure2": "1/2 oz ",
    "strMeasure3": "1/2 oz ",
    "strMeasure4": "1 1/2 oz ",
    "strMeasure5": "1 ",
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://commons.wikimedia.org/wiki/File:Mai_Tai_(16304400706).jpg",
    "strImageAttribution": "Johnny Silvercloud https://www.flickr.com/people/116193477@N08",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2015-08-18 15:17:50"
  },
  {
    "idDrink": "11009",
    "strDrink": "Moscow Mule",
    "strDrinkAlternate": null,
    "strTags": "IBA,ContemporaryClassic",
    "strVideo": null,
    "strCategory": "Punch / Party Drink",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Copper Mug",
    "strInstructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    "strInstructionsES": null,
    "strInstructionsDE": "Mischen Sie Wodka und Ingwerbier in einem mit Eis gefüllten Highball-Glas. Limettensaft hinzufügen. Vorsichtig umrühren. Garnieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Unisci la vodka e la ginger beer in un bicchiere highball pieno di ghiaccio.\r\nAggiungi il succo di lime.\r\nMescola delicatamente.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    "strIngredient1": "Vodka",
    "strIngredient2": "Lime juice",
    "strIngredient3": "Ginger ale",
    "strIngredient4": null,
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "2 oz ",
    "strMeasure2": "2 oz ",
    "strMeasure3": "8 oz ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://commons.wikimedia.org/wiki/File:Moscow_Mule_at_Rye,_San_Francisco.jpg",
    "strImageAttribution": "Will Shenton\r\n",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2017-09-02 17:49:48"
  },
  {
    "idDrink": "11403",
    "strDrink": "Gin And Tonic",
    "strDrinkAlternate": null,
    "strTags": null,
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": null,
    "strAlcoholic": "Alcoholic",
    "strGlass": "Highball glass",
    "strInstructions": "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
    "strInstructionsES": null,
    "strInstructionsDE": "Gießen Sie den Gin und das Tonic Water in ein Highball-Glas, das fast mit Eiswürfeln gefüllt ist. Gut umrühren. Mit dem Limettenkeil garnieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Versare il gin e l'acqua tonica in un bicchiere highball quasi riempito di cubetti di ghiaccio. Guarnire con lo spicchio di lime. Mescolare bene.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/z0omyp1582480573.jpg",
    "strIngredient1": "Gin",
    "strIngredient2": "Tonic water",
    "strIngredient3": "Lime",
    "strIngredient4": null,
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "2 oz ",
    "strMeasure2": "5 oz ",
    "strMeasure3": "1 ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": null,
    "strImageAttribution": null,
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2016-08-28 18:37:11"
  }]);

  // Search cocktail by name
  // www.thecocktaildb.com/api/json/v1/1/search.php?  s=margarita

  // List all cocktails by first letter
  // www.thecocktaildb.com/api/json/v1/1/search.php?  f=a

  // Search ingredient by name
  // www.thecocktaildb.com/api/json/v1/1/search.php?  i=vodka

  const [searchKey, setSearchKey] = useState('s');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchKey('f');
    setSearchTerm(event.target.value);
  };

  const [count, SetCount] = useState(0);

  const params = {
    [searchKey]: searchTerm,
  };

  // axios request for drink collection data
  const getDrinks = () => {
    if (count > 0) {
    axios
      .get('/drinks', { params })
      .then((resultOfSuccessfulGetRequest) => {
        console.log('HERE IS DRINK DATA--> ', resultOfSuccessfulGetRequest.data.drinks);
        SetDrinkCollection(resultOfSuccessfulGetRequest.data.drinks);
      })
      .catch((err) => {
        console.log('FAILED to get drink data from the server --> ', err);
      });
    }
  };

  useEffect(() => {
    getDrinks(),
    SetCount(1)
  },[searchTerm]);

  return (

    <div className={classes.root} >
      <Container maxWidth="xl">
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <Paper elevation={1} className={classes.paper}>
              Search
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={1} className={classes.paper} style={{color:'#ffffff', }}>
            <Typography variant="body1" className={classes.bold} style={{color: 'black'}} display="inline">{'List all cocktails by first letter '}</Typography>
            <Select
                  value={searchTerm}
                  display="inline"
                  onChange={handleChange}>
                  <MenuItem variant="body2" value={'a'}>A</MenuItem>
                  <MenuItem variant="body2" value={'b'}>B</MenuItem>
                  <MenuItem variant="body2" value={'c'}>C</MenuItem>
                  <MenuItem variant="body2" value={'d'}>D</MenuItem>
                  <MenuItem variant="body2" value={'e'}>E</MenuItem>
                  <MenuItem variant="body2" value={'f'}>F</MenuItem>
                  <MenuItem variant="body2" value={'g'}>G</MenuItem>
                  <MenuItem variant="body2" value={'h'}>H</MenuItem>
                  <MenuItem variant="body2" value={'i'}>I</MenuItem>
                  <MenuItem variant="body2" value={'j'}>J</MenuItem>
                  <MenuItem variant="body2" value={'k'}>K</MenuItem>
                  <MenuItem variant="body2" value={'l'}>L</MenuItem>
                  <MenuItem variant="body2" value={'m'}>M</MenuItem>
                  <MenuItem variant="body2" value={'n'}>N</MenuItem>
                  <MenuItem variant="body2" value={'o'}>O</MenuItem>
                  <MenuItem variant="body2" value={'p'}>P</MenuItem>
                  <MenuItem variant="body2" value={'q'}>Q</MenuItem>
                  <MenuItem variant="body2" value={'r'}>R</MenuItem>
                  <MenuItem variant="body2" value={'s'}>S</MenuItem>
                  <MenuItem variant="body2" value={'t'}>T</MenuItem>
                  <MenuItem variant="body2" value={'u'}>U</MenuItem>
                  <MenuItem variant="body2" value={'v'}>V</MenuItem>
                  <MenuItem variant="body2" value={'w'}>W</MenuItem>
                  <MenuItem variant="body2" value={'x'}>X</MenuItem>
                  <MenuItem variant="body2" value={'y'}>Y</MenuItem>
                  <MenuItem variant="body2" value={'z'}>Z</MenuItem>
                </Select>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={1} className={classes.paper} >

            <Grid item xs={12} >
                <Paper elevation={12} className={classes.paper}  padding={5} style={{marginBottom: '12px'}}>
                  <List style={{ maxHeight: '66vh', maxWidth: '100%', overflow: 'auto' }}>
                    {drinkCollection.map((drinkData, index) =>
                      <Paper variant="outlined" key={index} className={classes.paper} style={{marginBottom:'12px', border: '4px solid #D3D3D3'}} >
                      <DrinkTile spacing={4} padding={4} key={index} drinkData={drinkData} />
                      </Paper>
                    )}
                  </List>
                </Paper>
              </Grid>

            </Paper>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Main;