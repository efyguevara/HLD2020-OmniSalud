import React from "react";
import {
  Container,
  Grid,


} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Cards from './Cards';

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

const MedicalChecks = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
 
        <b className={classes.textStyles}>CONTROLES Y CITAS MÉDICAS</b>
        <Grid container spacing={4} className={classes.cardContainer}>
            <Cards /> 
        </Grid>
      </Container>
    </>
  );
};

export default MedicalChecks;
