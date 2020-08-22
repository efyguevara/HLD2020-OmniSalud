import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import PeopleIcon from '@material-ui/icons/People';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import GavelIcon from '@material-ui/icons/Gavel';
import { makeStyles } from "@material-ui/core/styles";


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

const Information = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                direction="column"
                alignItems="left"
            >
                <b  className={classes.textStyles}>TEMAS DE INTERÉS</b>
            </Grid>

            <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            >
                <ForumRoundedIcon style={{ fontSize: 70, color: "#98C11D" }}/>
                <p style={{fontWeight: 700}} >
                    FOROS
                </p>
            </Grid>

            <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            >
                <PeopleIcon  style={{ fontSize: 70, color: "#98C11D" }}/>
                <p style={{fontWeight: 700}} >
                    COMUNIDAD
                </p>
            </Grid>

            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            > 
                <ThumbsUpDownIcon  style={{ fontSize: 70, color: "#98C11D" }}/>
                <p style={{fontWeight: 700}} >
                    FUNDACIONES
                </p>
            </Grid>

            <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            >
                <GavelIcon  style={{ fontSize: 70, color: "#98C11D"}}/>
                <p style={{fontWeight: 700}} >
                    LEYES
                </p>
            </Grid> 
        </>
    )
}

export default Information;