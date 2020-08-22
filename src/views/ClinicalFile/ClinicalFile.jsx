
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 375,
  },
  tableContainer: {
    marginBottom: "20px"
  },
});

function createData(name, value) {
  return { name, value };
}

const personalData = [
  createData('Nombres', 'Esther María'),
  createData('Apellidos', 'Pérez González'),
  createData('RUT y/o pasaporte:', "12.729.555-k"),
  createData('Fecha de Nacimiento', "15-02-1986"),
  createData('Edad', "34"),
  createData('Sexo', "Femenino"),
];
const direction = [
  createData('Dirección', 'Av. Portugal, 551, depto 1508'),
  createData('Comuna', 'Santiago'),
];
const contact = [
  createData('Teléfono', '+56 9 35987563'),
  createData('Correo electrónico', 'esthergonzalez@gmail.com'),
  createData('Contacto de emergencia:', '+56 9 54908600'),
];
const medicalInformation = [
  createData('Grupo sanguineo', 'AB+'),
  createData('Patologías diagnosticadas', 'Hipertensión'),
  createData('Alergias', 'N/A'),
  createData('Tipo de previsión', 'Fonasa'),
];

export default function ClinicalFile() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "700", color: "#98C11D" }}>DATOS PERSONALES</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personalData.map((personalData) => (
              <TableRow key={personalData.name} >
                <TableCell component="th" scope="row" style={{ fontWeight: "700"}}>
                  {personalData.name}
                </TableCell>
                <TableCell align="right">{personalData.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "700", color: "#98C11D" }}>DIRECCIÓN</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {direction.map((direction) => (
              <TableRow key={direction.name} >
                <TableCell component="th" scope="row" style={{ fontWeight: "700"}}>
                  {direction.name}
                </TableCell>
                <TableCell align="right">{direction.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "700", color: "#98C11D" }}>CONTACTO</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contact.map((contact) => (
              <TableRow key={contact.name}>
                <TableCell component="th" scope="row" style={{ fontWeight: "700"}}>
                  {contact.name}
                </TableCell>
                <TableCell align="right">{contact.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "700", color: "#98C11D" }}>INFORMACIÓN MÉDICA</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {medicalInformation.map((medicalInformation) => (
              <TableRow key={medicalInformation.name}>
                <TableCell component="th" scope="row" style={{ fontWeight: "700"}}>
                  {medicalInformation.name}
                </TableCell>
                <TableCell align="right">{medicalInformation.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
