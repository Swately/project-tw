import React, { useContext } from "react";
import alasql from "alasql";
import data from "../../libs/data";
import { Button, Card, CardContent, CardMedia, Grid, Typography, Box, Divider } from "@mui/material";
import climasIMG from "../../libs/clime";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../Context/locationContext";
import climeIcons from "../../libs/iconsImages";


const ElementHeaderCard = (props) => {
    
    const locationContext = useContext(LocationContext);
    const navigate = useNavigate();
    const climeObject = alasql(`SELECT * FROM ? WHERE nmun == '${props.nmun}' AND nes == '${props.nes}'`, [data]);
    let iconList = climeObject.map((elementClime) => {
        let iconObj = climeIcons.find((element) => {
            if(element.desciel === elementClime.desciel){
                return(element);
            }
        })

        let icon = iconObj.image

        return icon
    })

    const imagesFilter = climeObject.map(function(climeElement){
        const image = climasIMG.find(function(element) {
            return element.desciel === climeElement.desciel;
        });
        return {desciel:climeElement.desciel, image: image};
    });

    return (
        <Grid container>
            <Card sx={{width:"100%", height:"100%", backgroundSize: "cover", backgroundImage: `url('${imagesFilter[locationContext.day]?.image.image}')` }}>
                <CardContent>
                    <Grid item>
                        <Button onClick={() => {
                            navigate("/");
                        }}>
                            <HomeIcon sx={{color: "white"}}/>
                        </Button>
                    </Grid>

                    <Grid container direction="row" justifyContent="center">
                        <Grid item sx={{width: "85%"}}>
                            <Card sx={{backgroundColor: "transparent", boxShadow: 5, transition: "box-shadow 0.3s ease-in-out", ":hover":{ boxShadow: "0 0 10px rgba(0, 0, 0, 4)"}}}>
                                <CardContent>
                                    <Grid container direction="row" justifyContent="space-around">
                                        <Grid item xs={12} md={4}>
                                            <Box>
                                                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                                                    <Grid item>
                                                        <Box sx={{display: "flex", width: 'fit-content', margin: "3em"}}>
                                                            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" spacing={2}>
                                                                <Grid item>
                                                                    <CardMedia component="img" src={iconList[locationContext.day]} alt="IconoClima" title="Clima" width={100} height={100}/>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Grid container direction="column">
                                                                        <Grid item>
                                                                            <Box>
                                                                                <Typography variant="h4" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                    {((parseFloat(climeObject[locationContext.day].tmax)+parseFloat(climeObject[locationContext.day].tmin))/2).toFixed(1)}°C
                                                                                </Typography>
                                                                            </Box>
                                                                        </Grid>
                                                                        <Divider/>
                                                                        <Grid item>
                                                                            <Box marginTop={0.5}>
                                                                                <Grid container direction="row" justifyContent="space-between">
                                                                                    <Grid item>
                                                                                        <Box>
                                                                                            <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                                {(parseFloat(climeObject[locationContext.day].tmax)).toFixed(1)}°C
                                                                                            </Typography>
                                                                                        </Box>
                                                                                    </Grid>
                                                                                    <Divider orientation="vertical" flexItem/>
                                                                                    <Grid item>
                                                                                        <Box>
                                                                                            <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                                {(parseFloat(climeObject[locationContext.day].tmin)).toFixed(1)}°C
                                                                                            </Typography>
                                                                                        </Box>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                            <Divider flexItem/>
                                                        <Grid container justifyContent="center" alignContent="center" alignItems="center">
                                                            <Grid item>
                                                                <Box sx={{display: "flex", width: 'fit-content', margin: "1em"}}>
                                                                    <Grid container direction="row" spacing={2} justifyContent="center" alignContent="center" alignItems="center">
                                                                        <Grid item xs={3}>
                                                                            <Box>
                                                                                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                                                                                    <Grid item sx={{width: 'fit-content'}} onClick= {() => {locationContext.setDay(0)}}>
                                                                                        <CardMedia component="img" src={iconList[0]} alt="IconoClima" title="Clima" width={40} height={40}/>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography fontSize={12} sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                            Dia 0
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Box>
                                                                                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                                                                                    <Grid item sx={{width: 'fit-content'}} onClick= {() => {locationContext.setDay(1)}}>
                                                                                        <CardMedia component="img" src={iconList[1]} alt="IconoClima" title="Clima" width={40} height={40}/>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography fontSize={12} sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                            Dia 1
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Box>
                                                                                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                                                                                    <Grid item sx={{width: 'fit-content'}} onClick= {() => {locationContext.setDay(2)}}>
                                                                                        <CardMedia component="img" src={iconList[2]} alt="IconoClima" title="Clima" width={40} height={40}/>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography fontSize={12} sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                            Dia 2
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Box>
                                                                                <Grid container direction="column" justifyContent="center" alignContent="center" alignItems="center">
                                                                                    <Grid item sx={{width: 'fit-content'}} onClick= {() => {locationContext.setDay(3)}}>
                                                                                        <CardMedia component="img" src={iconList[3]} alt="IconoClima" title="Clima" width={40} height={40}/>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography fontSize={12} sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                            Dia 3
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item sx={{xs: "8"}}>
                                            <Box sx={{display: "flex", margin: "1em"}}>
                                                <Grid container direction="column" spacing={2}>
                                                    <Grid item>
                                                        <Box>
                                                            <Grid container direction="column" justifyContent="flex-start" spacing={2}>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h3" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        {climeObject[0].nmun}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h4" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        {climeObject[0].nes}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h4" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        {climeObject[locationContext.day].desciel}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item>
                                                        <Box marginTop={1}>
                                                            <Grid container direction="row" justifyContent="space-between">
                                                                <Grid item xs={6}>
                                                                    <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        Precipitacion: {climeObject[locationContext.day].prec} L/m2 | {climeObject[locationContext.day].probprec} %
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        Viento: {climeObject[locationContext.day].velvien}km/h
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default ElementHeaderCard;