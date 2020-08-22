import React from "react";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import InsertDriveFileSharpIcon from "@material-ui/icons/InsertDriveFileSharp";
import ShareSharpIcon from "@material-ui/icons/ShareSharp";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";
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
                <b>Fecha de emisión: </b> 21/10/2020
              </span>
              <p>
                <span>
                  <b>Fecha de vencimiento: </b> 30/10/2020.
                </span>
              </p>
              <p>
                <span>
                  <b>Doctor: </b>Dr. Mojado
                </span>
              </p>
              <p>
                <span>
                  <b>Medicamentos: </b> Bisoprolol 5mg
                </span>
              </p>
             
            </CardContent>
          </Grid>
          <CardContent
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ShareSharpIcon /> <span>Compartir</span>
            <GetAppSharpIcon /> <span>Descargar</span>
          </CardContent>
          <CardContent style={{margin:'auto'}}>
           <b><u style={{color:'#98C11D'}}>Programar hora</u></b>
           </CardContent> 
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
                <b>Fecha de emisión: </b> 21/10/2020
              </span>
     
              <p>
                <span>
                  <b>Doctor: </b>Dr. Mojado
                </span>
              </p>
              <p>
                <span>
                  <b>Exámenes: </b> Electrocardiograma
                </span>
              </p>
            </CardContent>
          </Grid>
          <CardContent
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ShareSharpIcon /> <span>Compartir</span>
            <GetAppSharpIcon /> <span>Descargar</span>
          </CardContent>
          <CardContent style={{margin:'auto'}}>
           <b><u style={{color:'#98C11D'}}>Programar hora</u></b>
           </CardContent> 
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Cards;
