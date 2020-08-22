
import React from 'react';
// import { makeStyles, Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const ClinicalFile = () => {

//   const classes = useStyles();

//   return (
//     <>
//       <Grid
//         container
//         direction="row"
//         alignItems="left"
//       >
//         <b>FICHA CLÍNICA</b>
//       </Grid>

//       <List component="nav" className={classes.root} aria-label="mailbox folders">
//         <ListItem button>
//           <ListItemText primary="Inbox" />
//         </ListItem>
//         <Divider />
//         <ListItem button divider>
//           <ListItemText primary="Drafts" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Trash" />
//         </ListItem>
//         <Divider light />
//         <ListItem button>
//           <ListItemText primary="Spam" />
//         </ListItem>
//       </List>

//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
//           }
//           label="Enable dense"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={secondary}
//               onChange={(event) => setSecondary(event.target.checked)}
//             />
//           }
//           label="Enable secondary text"
//         />
//       </FormGroup>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" className={classes.title}>
//             Text only
//           </Typography>
//           <div className={classes.demo}>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" className={classes.title}>
//             Icon with text
//           </Typography>
//           <div className={classes.demo}>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemIcon>
//                     <FolderIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </div>
//         </Grid>
//       </Grid>
//     </>
//   );
// }


// export default ClinicalFile;

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
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
    </>
  );
}
