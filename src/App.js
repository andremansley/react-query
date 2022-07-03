import './App.css';
import * as api from "./api"
import {useQuery} from "react-query";
import CryptoPairContainer from "./Components/CryptoPairContainer"
import Navigation from "./Components/Navigation"
import {Typography} from "@mui/material";
import React, {useState} from 'react';

const filterByBinance = (coin) => {
    return coin.filter(e => e.market.identifier.toUpperCase() === "BINANCE" || e.market.identifier.toUpperCase() === "BINANCE_US")
}

const App = () => {

    const [activeCrypto, setActiveCrypto] = useState("Bitcoin")

    const {data: bitcoin, status: btcStatus} = useQuery("bitcoin", api.fetchBitcoinData);
    const {data: ethereum,status: ethStatus} = useQuery("ethereum", api.fetchEthereumData);
    const {data: litecoin, status: ltcStatus} = useQuery("litecoin", api.fetchLitecoinData);

    return (
        <div className="App">
            <Typography variant={"h4"} sx={{fontWeight: "bold", padding:"30px auto"}}>Binance BTC, ETH, LTC Pairs</Typography>

            <Navigation activeCrypto={activeCrypto} setActiveCrypto={setActiveCrypto}/>

            {activeCrypto === "Bitcoin" &&  btcStatus === "success" && filterByBinance(bitcoin.data.tickers).map((ticker, tickerID)=> <CryptoPairContainer pair={ticker}/>)}
            {activeCrypto === "Ethereum" &&  ethStatus === "success" && filterByBinance(ethereum.data.tickers).map((ticker, tickerID)=> <CryptoPairContainer pair={ticker}/>) }
            {activeCrypto === "Litecoin" &&  ltcStatus === "success" && filterByBinance(litecoin.data.tickers).map((ticker, tickerID)=> <CryptoPairContainer pair={ticker}/>)}

        </div>
    );
}
export default App;
