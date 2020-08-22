import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import Dashboard from '../views/Dashboard/Dashboard';
import Login from '../views/login/Login';
import ClinicalFile from '../views/ClinicalFile/ClinicalFile';
import MedicalRecord from '../views/medicalRecord/MedicalRecord';
import Prescriptions from '../views/prescriptions/Prescriptions';
import MedicalChecks from '../views/medicalChecks/MedicalChecks';
import Information from '../views/info/Information';
import NotFound from '../components/NotFound/NotFound';


const Routes = () => {

    return (
        <>
            <HashRouter basename="/">
                <Layout>
                    <Grid
                        container
                        direction="row"
                    >
                        <Grid
                            sm={12}
                            className=""
                            direction="column"
                        >
                        </Grid>
                    </Grid>
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/inicio" component={Dashboard} />
                            <Route exact path="/historial-medico" component={ClinicalFile} />
                            <Route exact path="/ficha-clinica" component={MedicalRecord} />
                            <Route exact path="/recetas-medicas" component={Prescriptions} />
                            {/* <Route path="/medicamentos-prescritos" component={Medicines} /> */}
                            <Route exact path="/chequeos-y-citas-medicas" component={MedicalChecks} />
                            <Route exact path="/información-adicional" component={Information} />
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
                </Layout>
            </HashRouter>
        </>
    );
}


export default Routes;