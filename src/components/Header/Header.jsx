import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MenuListComposition from './MenuListComposition';


const useStyles = makeStyles((theme) => ({

    header: {
        backgroundColor: "#FFFFFF",
        borderBottom: "3px solid #98C11D",
    },
    fontNav: {
        color: "#98C11D"
    },
    fontGrey: {
        color: "#7d7d7d"
    }
}));


const Header = () => {
    const classes = useStyles();



    return (
        <>
            <AppBar position="static" className={classes.header}>
                <Toolbar variant="dense">
                    <Grid 
                        container
                        item xs={9} 
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        >
                            <Typography variant="h5" className={classes.fontGrey}>
                            Onmi<span className={classes.fontNav}>Salud</span>
                        </Typography>
                    </Grid>

                    <Grid 
                    item xs={3}
                    container 
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                       <MenuListComposition />
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;