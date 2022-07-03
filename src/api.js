import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})

const fetchBitcoinData = async()=>{
    const request = api.get('coins/bitcoin/tickers/');
    return new Promise((resolve, reject) => {resolve(request); reject("Make Request Failed")})
}

const fetchEthereumData = async()=>{
    const request = api.get('coins/ethereum/tickers/');
    return new Promise((resolve, reject) => {resolve(request); reject("Make Request Failed")})
}

const fetchLitecoinData = async()=>{
    const request = api.get('coins/litecoin/tickers/');
    return new Promise((resolve, reject) => {resolve(request); reject("Make Request Failed")})
}

export {api, fetchBitcoinData, fetchEthereumData, fetchLitecoinData}