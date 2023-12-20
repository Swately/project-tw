import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import data from "../../../libs/data";
import alasql from "alasql";
import { Link } from "react-router-dom";

const SearchTool = (toSearch) => {

    const [search, setSearch] = useState([]);
    const [toSearchSize, setSearchSize] = useState();

    useEffect(() => {
        if(toSearchSize !== toSearch.toSearch.length){
            let searchResult = alasql(`SELECT * FROM ? WHERE UPPER(nmun) LIKE UPPER('${toSearch.toSearch}%') AND ndia == '0' OR UPPER(nes) LIKE UPPER('${toSearch.toSearch}%') AND ndia == '0' `, [data]);
            setSearch(searchResult);
            setSearchSize(toSearch.toSearch.length);
        }
    }, [search, toSearch, toSearchSize])

    if(toSearch.toSearch !== ''){
        return (
            <Grid container>
                <Grid item sx={{width: "100%"}}>
                    {search.map((element, index) => {
                        return(
                            <Grid container key={index}>
                                <Grid item sx={{ width: "100%", marginBottom: "5px", borderBottom: "solid 1px #ffffff" }} >
                                    <Link to={{pathname: `/elementClime/${element.nes}/${element.nmun}`}} state={element} style={{textDecoration: 'none', color: "inherit" }} >
                                        {element.nes} : {element.nmun}
                                    </Link>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
          );
    }

}

export default SearchTool;