import { Button, Grid, CardMedia, Typography } from "@mui/material";
import estadosImages from "../libs/estadosImg";
import ListCard from "./cards/listCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LocationContextProvider from "../Context/locationContext";
import Logo from '../images/CLIMAX_LOGO.png'

const ListComponent = () => {

    const navigate = useNavigate();

    return(
        <LocationContextProvider>
            <Grid container direction="row" alignContent="center" justifyContent="center">
                <Grid item>
                    <Grid container>
                        <Grid item xs={10} sx={{position: "fixed", backgroundColor: "transparent", borderRadius: "10px", marginTop: "1em"}}>
                            <Button onClick={() => {
                                        navigate("/*");
                                    }}>
                                        <CardMedia component="img" src={Logo} alt="Logo" title="logo" sx={{width: "40px", height: "40px" }}/>
                                        <Typography fontSize={14} sx={{color: "black", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: "bold"}}>
                                            Home
                                        </Typography>
                                    </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} sx={{marginTop: "4em"}}>
                    <Grid container spacing={2}>
                        {estadosImages.map((element, index) => {
                            return(
                                <Grid item key={index} width="100%" height="20em">
                                    <Link to={{pathname: `/munList/${element.nes}`}} state={element} style={{textDecoration: 'none', color: "inherit" }}>
                                        <ListCard nes={element.nes} nesIMG={element.image}/>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </LocationContextProvider>
    )
}

export default ListComponent;