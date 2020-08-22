import React from "react";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NoteAddIcon from '@material-ui/icons/NoteAdd';


const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "6px",
    minWidth: 275,
    marginBottom: "15px",
  },
  textStyles: {
    textAlign: "initial",
    fontSize: "12px",
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
                <b>CITA MÉDICA PROGRAMADA</b>
              </span>
              <p>
                <span>
                  <b>Fecha</b> 16/09/2020.
                </span>
              </p>
              <p>
                <span>
                  <b>Lugar: </b>Portal de Ortodoncia
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
              <NoteAddIcon
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
                <b>ÚLTIMO DOCUMENTO EN EL HISTORIAL</b>
              </span>
              <p>
                <span>
                  <b>Fecha</b> 18/08/2020.
                </span>
              </p>
              <p>
                <span>
                  <b>Especialidad: </b>Exámen Laboratorio
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
              <LocalHospitalIcon
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
                <b>RECETA POR VENCER</b>
              </span>
              <p>
                <span>
                  <b>Fecha</b> 25/08/2020.
                </span>
              </p>
              <p>
                <span>
                  <b>Medicamento(s):</b>Omeprazol
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
