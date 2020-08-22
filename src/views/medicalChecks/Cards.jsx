import React from "react";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme) => ({

  card: {
    height: "100%",
    display: "flex",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "6px",
    minWidth: 275,
    marginBottom: '15px'
  },
  textStyles: {
    textAlign: "initial",
    fontSize:"12px"
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
      <React.Fragment>
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia>
            <AccessTimeIcon
              style={{
                color: "#98C11D",
                fontSize: "60px",
                margin: "20px",
              }}
            />
          </CardMedia>
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "-20px", marginTop: "15px" }}>
          <CardContent className={classes.textStyles}>
            <span>
              <b>Fecha: </b> 21/10/2020
            </span>
            <p>
              <span>
                <b>Lugar: </b>Hospital de Urgencia Asistencia Pública.
              </span>
            </p>
            <p>
              <span>
                <b>Especialidad: </b>Cardiología
              </span>
            </p>
            <p>
              <span>
                <b>Piso: </b>2
              </span>
            </p>
            <p>
              <span>
                <b>Hora: </b> 3:15 p.m.
              </span>
            </p>
            <p>
              <span>
                <b>Doctor: </b> Dr. Simi
              </span>
            </p>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
      
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia>
            <AccessTimeIcon
              style={{
                color: "#98C11D",
                fontSize: "60px",
                margin: "20px",
              }}
            />
          </CardMedia>
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "-20px", marginTop: "15px" }}>
          <CardContent className={classes.textStyles}>
            <span>
              <b>Fecha: </b> 21/10/2020
            </span>
            <p>
              <span>
                <b>Lugar: </b>Hospital de Urgencia Asistencia Pública.
              </span>
            </p>
            <p>
              <span>
                <b>Especialidad: </b>Cardiología
              </span>
            </p>
            <p>
              <span>
                <b>Piso: </b>2
              </span>
            </p>
            <p>
              <span>
                <b>Hora: </b> 3:15 p.m.
              </span>
            </p>
            <p>
              <span>
                <b>Doctor: </b> Dr. Simi
              </span>
            </p>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </React.Fragment>
  );
};

export default Cards;
