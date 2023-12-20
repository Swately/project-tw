import React, {useContext} from "react";
import HeaderSkeleton from "./cards/Skeletons/headerSkeleton";
import { LocationContext } from "../Context/locationContext";
import HeaderCard from "./cards/headerCard";



export default function Header(){

    const locationContext = useContext(LocationContext);

    if(!locationContext.dataLoaded){
        return(
            <HeaderSkeleton/>
        );
    }else{
        return(
            <HeaderCard/>
        );
    }
}