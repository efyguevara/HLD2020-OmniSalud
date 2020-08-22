import React from "react";
import {
  Container,
  Grid,


} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cards from './Cards'



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

const Prescriptions = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          alignItems="left"
        >
          <b className={classes.textStyles}>RECETAS Y EXÁMENES</b>
        </Grid>
        <Grid container spacing={4} className={classes.cardContainer}>
            <Cards />
        </Grid>
      </Container>
    </>
  );
};

export default Prescriptions;
