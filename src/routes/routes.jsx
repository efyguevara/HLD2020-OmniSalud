import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
            <BrowserRouter>
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
                            
                            <Route exact path="/historial-medico" component={MedicalRecord} />
                            <Route exact path="/ficha-clinica" component={ClinicalFile} />
                            <Route exact path="/controles-y-citas-medicas" component={MedicalChecks} />
                            <Route exact path="/recetas-y-examenes" component={Prescriptions} />
                            <Route exact path="/información-de-interes" component={Information} />
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
                </Layout>
            </BrowserRouter>
        </>
    );
}


export default Routes;