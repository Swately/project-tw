import React, { useContext } from "react";
import alasql from "alasql";
import data from "../../libs/data";
import { LocationContext } from "../../Context/locationContext";
import {Grid, Card, CardContent, Typography, Box, Divider} from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import WindPowerIcon from '@mui/icons-material/WindPower';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ElementClimeDetail = (props) => {

    const locationContext = useContext(LocationContext);
    const climeObject = alasql(`SELECT * FROM ? WHERE nmun == '${props.nmun}' AND nes == '${props.nes}'`, [data]);

    return(
        <Card sx={{backgroundColor: "#ECECEC"}}>
                    <CardContent>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item xs={2}>
                                            <CloudIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography fontSize={18}>
                                                Cobertura de nubes: {climeObject[locationContext.day].cc}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Divider flexItem/>
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item xs={2}>
                                            <BrowseGalleryIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography fontSize={18}>
                                                Diferencia respecto a hora UTC: {climeObject[locationContext.day].dh} horas
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Divider flexItem/>
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item xs={2}>
                                            <WindPowerIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography fontSize={18}>
                                                Velocidad del viento: {climeObject[locationContext.day].velvien} km/h | {climeObject[locationContext.day].dirvienc} | {climeObject[locationContext.day].dirvieng}°
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Divider flexItem/>
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item xs={2}>
                                            <WaterDropIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography fontSize={18}>
                                                Precipitación: {climeObject[locationContext.day].prec} litros/m2 | {climeObject[locationContext.day].probprec}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Divider flexItem/>
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item xs={2}>
                                            <ArrowDropUpIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography fontSize={18}>
                                                Temperatura maxima: {climeObject[locationContext.day].tmax}°
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <ArrowDropDownIcon fontSize="large"/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography fontSize={18}>
                                                Temperatura minima: {climeObject[locationContext.day].tmin}°
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
    )
}

export default ElementClimeDetail;