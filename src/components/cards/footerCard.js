import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../images/icon_CLIMAX.png'
import { Link } from "react-router-dom";

const Footer = () =>{

    return(
        <Card sx={{marginTop:"2em", backgroundColor:"transparent"}}>
            <CardContent>
                <Grid container direction="row">
                    <Grid item xs={12} md={6}>
                        <Grid container justifyContent="flex-start">
                            <Grid item sx={{ margin: '1em' }}>
                                <Link to="https://www.facebook.com/escomipnmx/?locale=es_LA" target="_blank" rel="noopener noreferrer" style={{color: "#00afef"}} underline="none">
                                    <FacebookIcon fontSize="large" />
                                </Link>
                            </Grid>
                            <Grid item sx={{ margin: '1em' }}>
                                <Link to="https://twitter.com/escomunidad?lang=en" target="_blank" rel="noopener noreferrer" style={{color: "#00afef"}} underline="none">
                                    <TwitterIcon fontSize="large" />
                                </Link>
                            </Grid>
                            <Grid item sx={{ margin: '1em' }}>
                                <Link to="https://escom.ipn.mx/" target="_blank" rel="noopener noreferrer" style={{color: "#00afef"}} underline="none">
                                    <LanguageIcon fontSize="large" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12} md={6}>
                        <Grid container justifyContent="flex-start">
                            <Grid item sx={{margin: "1em"}}>
                                <CardMedia component="img" src={logo} alt="CLIMAX" title="CLIMAS"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container justifyContent="flex-end">
                            <Grid item sx={{margin: "1em"}}>
                                <Typography variant="body">
                                    © 2023 CliMaX, Inc.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Footer;