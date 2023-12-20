import { Grid } from "@mui/material";
import ElementHeaderCard from "./cards/elementHeaderCard";
import { useLocation } from "react-router-dom";
import LocationContextProvider from "../Context/locationContext";
import ElementClimeDetail from "./cards/elementClimedetail";




const ElementClime = () => {

    const location = useLocation();
    return(
        <LocationContextProvider>
            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" spacing={5} sx={{marginRight: "100vh", '@media (max-width: 1200px)':{marginRight: "auto"}}}>
                <Grid item xs={12}>
                    <ElementHeaderCard nes={location.state.nes} nmun={location.state.nmun}/>
                </Grid>
                <Grid item xs={10}>
                    <ElementClimeDetail nes={location.state.nes} nmun={location.state.nmun}/>
                </Grid>
            </Grid>
        </LocationContextProvider>
    )
}

export default ElementClime;