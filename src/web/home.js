import React from "react";
import '../css/flex.css'
import Header from '../components/header';
import Main from "../components/main";
import { Grid } from "@mui/material";
import LocationContextProvider from "../Context/locationContext";
import Presentation from "../components/presentacion";
import Footer from "../components/cards/footerCard";
import ScrollToTop from "../components/scrollToTop";


const Home = () =>{
    return (
        <LocationContextProvider>
          <ScrollToTop/>
            <Grid container>
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <Header/>
                </Grid>
              </Grid>
              <Grid container sx={{marginTop: "2em"}} justifyContent="center">
                <Grid item xs={10}>
                  <Main/>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={10}>
                  <Presentation/>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <Footer/>
                </Grid>
              </Grid>
            </Grid>
        </LocationContextProvider>
      );
}

export default Home;