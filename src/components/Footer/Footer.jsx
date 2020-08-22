import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor: "#98C11D",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Desarrollado por Lorem Ipsum.
                    </Typography>
                </Container>
            </footer>
        </div>
    );
}
export default Footer;











