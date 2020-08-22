
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, ListItem, List} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   maxWidth: 752,
  // },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  textStyles: {
    textAlign: "initial",
  },
}));


export default function ClinicalFile() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid
          container
          direction="column"
          alignItems="left"
        >
          <b className={classes.textStyles}>
            FICHA CLÍNICA
          </b>
        </Grid>
        <List>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Nombres:</span> Esther María.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Apellidos:</span> Pérez González.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>RUT y/o pasaporte:</span> 12.729.555-K.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Fecha de Nacimiento:</span>  15-02-1986.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Edad:</span> 34.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Dirección:</span>  Av. Portugal, 551, depto 1508.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Comuna:</span>  Santiago.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Teléfono: </span> 935987563.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Correo electrónico:</span> esthergonzalez@gmail.com.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Grupo sanguineo:</span>  AB+.
            </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Patologías diagnosticadas:</span> Hipertensión.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Alergias:</span>  N/A.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Tipo de Previsión:</span> Fonasa.
          </ListItem>
          <ListItem>
            <span style={{ fontWeight: "700" }}>Contacto de emergencia:</span> 954908600.
          </ListItem>
        </List>
      </Container>
    </>
  );
}
