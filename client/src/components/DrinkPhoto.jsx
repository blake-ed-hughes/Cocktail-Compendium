import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '75%',
  height: '90%',
  bgcolor: 'transparent',
  boxShadow: 24,

};

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
  }
}));

function DrinkPhoto({photo}) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div className={classes.root}>

        <Grid container item xs={4} spacing={2} padding={1} onClick={handleOpen}>
          <img src={photo} style={{ minWidth: 300, height: 300 }}/>
          </Grid>

          <Modal open={open} onClose={handleClose}>
            <Box sx={style} >
              <img src={photo} height='100%' width='100%' />
            </Box>
          </Modal>

    </div>
  )
}

export default DrinkPhoto;
