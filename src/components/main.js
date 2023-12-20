import React, {useContext} from "react";
import '../css/flex.css'
import { Grid } from "@mui/material";
import { LocationContext } from "../Context/locationContext";
import ElementCardSkeleton from "./cards/Skeletons/elementCardSkeleton";
import SearchBar from "./cards/searchBarCard";

export default function Main(){
    const locationContext = useContext(LocationContext);

    if(!locationContext.dataLoaded){
        return(
            <Grid container >
                <Grid container marginBottom={4}>
                    <Grid item xs={12}>
                        <SearchBar/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }else{
        return(
            <Grid container >
                <Grid container marginBottom={4}>
                    <Grid item xs={12}>
                        <SearchBar/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}