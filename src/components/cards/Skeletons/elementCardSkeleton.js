import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const ElementCardSkeleton = () =>(
    <Card sx={{width: "100%", height: "100%"}}>
        <CardContent>
            <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Skeleton variant="rectangular" width={50} height={50} />
                        </Grid>
                        <Grid item>
                            <Skeleton variant="rectangular" width={200} height={34} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
  </Card>
)

export default ElementCardSkeleton;