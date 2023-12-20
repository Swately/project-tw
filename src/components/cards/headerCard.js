import React, {useContext} from "react";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { LocationContext } from "../../Context/locationContext";
import { useNavigate } from "react-router-dom";
import climeIcons from "../../libs/iconsImages";

const HeaderCard = () => {
    
    const locationContext = useContext(LocationContext);
    const navigate = useNavigate();
    

    
    let iconList = locationContext.localClime.map((elementClime) => {
        let iconObj = climeIcons.find((element) => {
            if(element.desciel === elementClime.desciel){
                return(element);
            }
        })

        let icon = iconObj.image

        return icon
    })
    
    return (
        <Grid container>
            <Card sx={{width:"100%", height:"100%", backgroundSize: "cover", backgroundImage: `url('${locationContext.localClimeIMG[locationContext.day]?.image.image}')` }}>
                <CardContent>
                    <Grid item>
                        <Button onClick={() => {
                            navigate("/listComponent");
                        }}>
                           <CardMedia component="img" src={require('../../images/icon_CLIMAX.png')} alt="logo" title="Clima" width={20} height={20} sx={{margin:"1em"}}/>
                            <Typography fontSize={14} sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: "bold"}}>
                                Estados
                            </Typography>
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
                                                                                    {((parseFloat(locationContext.localClime[locationContext.day].tmax)+parseFloat(locationContext.localClime[locationContext.day].tmin))/2).toFixed(1)}°C
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
                                                                                                {(parseFloat(locationContext.localClime[locationContext.day].tmax)).toFixed(1)}°C
                                                                                            </Typography>
                                                                                        </Box>
                                                                                    </Grid>
                                                                                    <Divider orientation="vertical" flexItem/>
                                                                                    <Grid item>
                                                                                        <Box>
                                                                                            <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                                                {(parseFloat(locationContext.localClime[locationContext.day].tmin)).toFixed(1)}°C
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
                                                                        {locationContext.localClime[0].nmun}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h4" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        {locationContext.localClime[0].nes}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h4" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        {locationContext.localClime[locationContext.day].desciel}
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
                                                                        Precipitacion: {locationContext.localClime[locationContext.day].prec} L/m2 | {locationContext.localClime[locationContext.day].probprec} %
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <Typography variant="body" sx={{color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                                                                        Viento: {locationContext.localClime[locationContext.day].velvien}km/h
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
export default HeaderCard;