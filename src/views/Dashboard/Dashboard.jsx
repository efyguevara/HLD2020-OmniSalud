import React from 'react';
import Cards from './Cards'
import { Container, Grid } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import PersonIcon from '@material-ui/icons/Person';
  
  const useStyles = makeStyles((theme) => ({
    cardContainer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
    },
    textStyles: {
      textAlign: "initial",
    },
  }));
const Dashboard = () => {
  const classes = useStyles();

    return (
        <>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify= "flex-start"
            alignItems="left"
          >
            <b className={classes.textStyles}><PersonIcon className={classes.textStyles}/>HOLA ESTHER MARÍA</b>
          </Grid>
          <Grid container spacing={4} className={classes.cardContainer}>
              <Cards /> 
          </Grid>
        </Container>
      </>
    )
}

export default Dashboard;