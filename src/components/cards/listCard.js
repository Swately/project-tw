import { Card, CardContent, Typography } from "@mui/material";


const ListCard = (props) => {
    return(
        <Card sx={{width:"100%", height:"100%", backgroundImage: `url('${props.nesIMG}')`, backgroundPosition: "center", backgroundSize: "cover", transition: "box-shadow 0.3s ease-in-out", ":hover":{ boxShadow: "0 0 10px rgba(0, 0, 0, 4)"}}}>
            <CardContent>
                <Typography variant="h3" color="#ffffff" sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                    {props.nes}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ListCard;