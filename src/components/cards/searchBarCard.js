import { useState } from "react";
import { Card, CardContent, Grid, TextField, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchTool from "./CardTools/searchTool";

const SearchBar = () => {
    
    const [toSearch, setToSearch] = useState("");
    
    return(
        <Grid container justifyContent="center" alignItems="center" alignContent="center">
            <Grid item>
                <Card sx={{backgroundColor: "#D4D4D4", width: "fit-content"}}>
                    <CardContent>
                        <Grid container direction="column">
                            <Grid item>
                                <Box>
                                    <Grid container direction="row" justifyContent="space-between">
                                        <Grid item xs={2}>
                                            <SearchIcon sx={{marginRight: 1, width: "2em", height: "2em"}}/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <TextField value={toSearch} onChange={(event) => {setToSearch(event.target.value)}} variant="standard" InputProps={{ disableUnderline: true }} sx={{width: "15em", height: "100%", padding: "5px"}} placeholder="Buscar por municipio o estado" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    <SearchTool toSearch={toSearch}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )}

export default SearchBar;