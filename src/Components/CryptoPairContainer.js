import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const formatAsCurrency = () =>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

const CryptoPairContainer = ({pair})=> {
    return (
        <Card sx={{width:"40vw", margin:"auto", display:"flex",alignItems:"center", flexDirection:"column", marginTop:"5px", marginBottom:"5px"}} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {pair.name}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {pair.base}/{pair.target}
                </Typography>
                <Typography variant="body2">
                    <p><b>Exchange: </b>{pair.market.identifier}</p>
                    <p><b>Price:</b> {formatAsCurrency().format(pair.converted_last.usd)}</p>
                    <p><b>Volume:</b> {formatAsCurrency().format(pair.converted_volume.usd)}</p>
                </Typography>
            </CardContent>
            <CardActions>
                    <Button variant={"outlined"} size="small" onClick={()=>
                        window.open(pair.trade_url, "_blank")
                    } sx={{marginBottom:2}}>Trade this pair</Button>
            </CardActions>
        </Card>
    );
}

export default CryptoPairContainer;
