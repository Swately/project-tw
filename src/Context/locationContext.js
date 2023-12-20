import React, { useState, useEffect } from "react";
import GetLocation from "../hooks/location";
import data from "../libs/data";
import climasIMG from "../libs/clime";

export const LocationContext = React.createContext({});

export default function LocationContextProvider({children}){

    const [dataLoaded, setDataLoaded] = useState(false);
    const [localClime, setLocalClime] = useState(null);
    const {locationInfo, locationInfoError, municipality} = GetLocation();
    const [localClimeIMG, setLocalClimeIMG] = useState(null);
    const [day, setDay] = useState(0);


    useEffect(() => {
        
        if(locationInfo !== null){
            const localClimeFilter = data.filter((element) => element.nmun === municipality);
            const imagesFilter = localClimeFilter.map(function(climeElement){
                const image = climasIMG.find(function(element) {
                    return element.desciel === climeElement.desciel;
                });
                return {desciel:climeElement.desciel, image: image};
            });
            setLocalClime(localClimeFilter);
            setLocalClimeIMG(imagesFilter);
            if(localClime !== null){
                setDataLoaded(true);
            }
        }
    }, [locationInfo, municipality]);

    return(
        <LocationContext.Provider value={{localClime, setLocalClime, day, setDay, dataLoaded, setDataLoaded, localClimeIMG, setLocalClimeIMG}}>
            {children}
        </LocationContext.Provider>
    )
}