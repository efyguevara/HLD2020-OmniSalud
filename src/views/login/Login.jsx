import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, CssBaseline, TextField, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#98C11D'
    },
}));

const Login = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Grid container>
                        <Grid item xs>
                            <label>¿Olvidaste tu contraseña?</label>
                        </Grid>

                    </Grid>

                    <Link href="/inicio">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Ingresar
                        </Button>
                    </Link>

                    <Grid container>
                        <Grid item xs>
                            <label>Regístrate</label>
                        </Grid>

                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;
