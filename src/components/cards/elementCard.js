import { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import alasql from "alasql";
import data from "../../libs/data";
import climeIcons from "../../libs/iconsImages";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ElementCard = (props) => {

    const [dayElement, setDayElement] = useState(0);
    const elementClime = alasql(`SELECT * FROM ? WHERE nmun == '${props.nmun}'`, [data]);
    let iconObj = climeIcons.find((element) => {
        if(element.desciel === elementClime[dayElement].desciel){
            return(element);
        }
    })
    let icon = iconObj.image

    return(
        <Card sx={{width: "100%", height: "100%", backgroundColor: "rgba(79, 91, 93, 0.4)", alignContent: "center", alignItems: "center", transition: "box-shadow 0.3s ease-in-out", ":hover":{ boxShadow: "0 0 10px rgba(0, 0, 0, 1.2)"}}} >
            <CardContent>
                <Grid container direction="column" alignContent="center" alignItems="center">
                    <Grid item sx={{width: "200px", height: "200px"}}>
                        <CardMedia component="img" src={icon} alt="IconoClima" title="Clima"/>   
                    </Grid>

                    <Grid item>
                        <Button onClick={() => {
                            if(dayElement !== 0){
                                setDayElement(dayElement - 1);
                            }
                        }}>
                            <ArrowBackIosNewIcon sx={{color: "black"}}/>
                        </Button>
                        <Button onClick={() => {
                            if(dayElement !== 3){
                                setDayElement(dayElement + 1);
                            }
                        }}>
                            <ArrowForwardIosIcon sx={{color: "black"}}/>
                        </Button>
                    </Grid>

                    <Grid item>
                        <Grid container direction="column" justifyContent="flex-start" spacing={1}>

                            <Grid item>
                                <Typography color="#black" fontSize={18} >
                                    {elementClime[dayElement].nmun}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography color="#black" variant="body1">
                                    {elementClime[dayElement].desciel}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography color="#black" variant="body1">
                                    {elementClime[dayElement].tmin}° | {elementClime[dayElement].tmax}°
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>   
                </Grid>
            </CardContent>
        </Card>
    )
} 

export default ElementCard;