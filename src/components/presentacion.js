import { Grid, Typography, Box } from "@mui/material";
import CLIMAX_LOGO from '../images/CLIMAX_LOGOsobre2.png'
import cubierto from '../images/ClimasIconos/cubierto_icon_sg.png';
import despejado from '../images/ClimasIconos/despejado_icon_sg.png';
import medionub from '../images/ClimasIconos/medioNublado_icon_sg.png';
import nublado from '../images/ClimasIconos/nublado_icon_sg.png';
import poco from '../images/ClimasIconos/pocoNuboso_icon_sg.png';

const Presentation = () => {

    return(
        <Box xs={12}>
            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h1">
                        ¿Quienes somos?
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="img" component="img" src={CLIMAX_LOGO} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                    Somos una empresa empeñada a recopilar la informacion que nos proporciona el Sistema Meteorologico Nacional de México, para darle una experiencia a los usuarios agradable y de facil acceso y entendimiento. Nuestra pagina cuenta con la informacion climatologica de los 2,469 municipios
                        y demarcaciones territoriales que conforman a ¡México!. ¡Con informacion de hoy y de los siguientes 3 días!
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h2">
                        Cielo Cubierto
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="imgClimas" component="img" src={cubierto} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                    El cielo cubierto representa un cielo cerrado con altas probabilidades de lluvia, este tiende a venir acompañado de bajas temperaturas.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h2">
                        Cielo Despejado
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="imgClimas" component="img" src={despejado} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                        El cielo despejado nos trae un dia caluroso, un clima calido con una minima probabilidad de lluvia, casi nula. De igual manera, no olvides salir con un paraguas en mano, ¡asi como un buen bloqueador solar para proteger tu piel!
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h2">
                        Cielo Medio Nublado
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="imgClimas" component="img" src={medionub} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                        Un clima mayormente calido, con un espectaculo de nubes maravilloso, muchas veces podemos ver al cielo e imaginar, soñar frente a el.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h2">
                        Cielo Nublado
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="imgClimas" component="img" src={nublado} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                        El cielo nublado nos indica una mayor probabilidad de lluvia, sin embargo, podemos esperar algun que otro rayo de sol, no olvides el paraguas que seguramente la lluvia se hara presente.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item>
                    <Typography variant="h2">
                        Poco Nuboso
                    </Typography>
                </Grid>
            </Grid> 

            <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" marginBottom={5}>
                <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" marginBottom={5}>
                        <Grid item>
                            <img className="imgClimas" component="img" src={poco} alt="IconoClima" title="Clima"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body">
                    El clima poco nuboso se refiere a una cantidad mayor de sol y con un minimo de nubes, por lo que podremos esperar un clima mayormente caluroso.
                    </Typography>
                </Grid>
            </Grid>
        </Box>   
    );
}

export default Presentation;