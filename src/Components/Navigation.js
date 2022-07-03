import React, {useState} from 'react';
import Button from "@mui/material/Button";


const Navigation = ({activeCrypto, setActiveCrypto}) =>{
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', maxWidth:"20vw", margin:"20px auto"}}>
            <Button variant={activeCrypto === "Bitcoin" ? "contained" : "outlined"} onClick={()=> setActiveCrypto("Bitcoin")}>Bitcoin</Button>
            <Button variant={activeCrypto === "Ethereum" ? "contained" : "outlined"} onClick={()=> setActiveCrypto("Ethereum")}>Ethereum</Button>
            <Button variant={activeCrypto === "Litecoin" ? "contained" : "outlined"} onClick={()=> setActiveCrypto("Litecoin")}>Litecoin</Button>

        </div>
    )
}

export default Navigation