import { Card, CardContent, Grid, Skeleton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DatasetIcon from '@mui/icons-material/Dataset';


const HeaderSkeleton = () =>{

    const navigate = useNavigate();

    return(
        <Grid container >
            <Card  sx={{width:"100%", height:"100%", backgroundColor: "gray"}}>
                <CardContent>
                    <Grid item>
                        <Button onClick={() => {
                            navigate("/listComponent");
                        }}>
                            <DatasetIcon sx={{color: "white"}}/>
                        </Button>
                    </Grid>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-evenly">
                                <Grid item>
                                    <Skeleton variant="rectangular" width={300} height={300} />
                                </Grid>
                                <Grid item>
                                    <Skeleton variant="rectangular" width={600} height={300} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );

}

export default HeaderSkeleton;