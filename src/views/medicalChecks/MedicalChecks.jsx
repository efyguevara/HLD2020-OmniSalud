import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "green",
    
  },
  cardContainer:{
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
      display:'flex',
      flexDirection:'column'
  }
}));

const MedicalChecks = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h5">Controles y citas médicas</Typography>
        <Grid container spacing={4} className={classes.cardContainer}>
            <Card>
                <CardMedia>
                    marico el que lo lea
                </CardMedia>
                <CardContent>
                <Typography variant="h5">Render</Typography>
                </CardContent>
            </Card>

            <Card>
                <CardMedia>
                    marico el que lo lea
                </CardMedia>
                <CardContent>
                <Typography variant="h5">Render</Typography>
                </CardContent>
            </Card>
        </Grid>
      </Container>
    </>
  );
};

export default MedicalChecks;
