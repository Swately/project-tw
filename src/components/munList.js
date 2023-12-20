import { Grid, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import ListCard from "./cards/listCard";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import data from "../libs/data";
import alasql from "alasql";
import ElementCard from "./cards/elementCard";
import LocationContextProvider from "../Context/locationContext";
import ScrollToTop from "./scrollToTop";

const MunList = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const props = location.state;
    let list = alasql(`SELECT nmun FROM ? WHERE nes == '${props.nes}' AND ndia == '0'`, [data]);

    return(
        <LocationContextProvider>
            <Grid container alignContent="center" justifyContent="center">
                <ScrollToTop/>
                <Grid item>
                    <Grid container>
                        <Grid item xs={10} sx={{position: "fixed", backgroundColor: "transparent", borderRadius: "10px", marginTop: "1em"}}>
                            <Button onClick={() => {
                                        navigate("/");
                                    }}>
                                        <HomeIcon sx={{color: "#D4D4D4"}}/>
                                    </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={10} width="100%" height="20em" sx={{marginTop: "5em"}}>
                    <ListCard nes={props.nes} nesIMG={props.image} />
                </Grid>

                <Grid item xs={10} sx={{marginTop: "5em"}}>
                    <Grid container spacing={1} justifyContent="space-around">
                        {list.map((element, index) => {
                            return(
                                <Grid key={index} item>
                                    <ElementCard nes={props.nes} nmun={element.nmun} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </LocationContextProvider>
    );
}

export default MunList;