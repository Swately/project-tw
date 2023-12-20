import { Card, CardContent, Grid, Input, Skeleton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBardCardSkeleton = () => (
    <Grid container direction="column">
        <Grid item>
            <Grid container alignItems={"center"} justifyContent="center">
                <Grid item className="input-wrapper">
                    <Grid container>
                        <Grid item>
                            <SearchIcon sx={{marginRight: 1, width: "2em", height: "2em"}}/>
                        </Grid>

                        <Grid item>
                            <Input disableUnderline sx={{width: "20em", height: "100%"}} placeholder="Buscar por municipio o estado" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

export default SearchBardCardSkeleton;