import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


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
                    <IconButton edge="start" className="" color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h5" className={classes.fontGrey}>
                        Onmi<span className={classes.fontNav}>Salud</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;