import { useState, useEffect } from "react";
import axios from "axios";
import alasql from "alasql";
import data from "../libs/data";

export default function GetLocation(){
    const [locationInfo, setLocationInfo] = useState(null);
    const [locationError, setLocationInfoError] = useState(null);
    const [municipality, setMunicipality] = useState("");
    const municipios = alasql("SELECT nmun FROM ? WHERE ndia == '0'", [data]);
    const listMun = municipios.map((element) => {
        return(element.nmun)
    })

    useEffect(() => {
        const {geolocation} = navigator;

        const success = (res) =>{
            setLocationInfo(res.coords); 
        };

        const  error = (res) =>{
            setLocationInfoError(res.message);
        }

        if(!locationError && !locationInfo){
            geolocation.getCurrentPosition(success, error);
        }
    });

    useEffect(()=>{

        const obtainCity = async (lat, lon) => {
            try{
                const apiKey = "AIzaSyCvXwp8DlD8VO6EsY-JVlXc-_O95pUZ7sY";
                const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`);
                const results = response.data.results;
                const adressInfo = alasql("SELECT formatted_address FROM ?", [results])
                const adressInfoList = adressInfo.map((element) => {
                    return(element.formatted_address);
                })
                adressInfoList.map(adressItem => {
                    const matches = listMun.filter(munItem => adressItem.includes(munItem));
                    const largestMatch = matches.reduce((prev, current) => (current.length > prev.length ? current : prev), '');
                  
                    if(largestMatch !== ''){
                        setMunicipality(largestMatch);
                    }
                  });

            }catch(error){
                console.error("Error al obtener la ciudad", error);
            }
        }

        
        if(locationInfo != null){
            obtainCity(locationInfo.latitude, locationInfo.longitude);
        }
        
    }, [locationError, locationInfo, municipality, listMun]);

    return{locationError, locationInfo, municipality};
};