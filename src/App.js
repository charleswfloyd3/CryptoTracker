import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios'
import './App.css';
import axios from 'axios';
import CoinData from './coindata';
import Top10coins from './top10coins.';


function App() {
  let coinRef = React.useRef(null)
  const [searchStatus, setSearchStatus] = useState('/')
  const [cryptoData,setCryptodata]= useState({coin: "sdf",
  price: "sdf"});
  const [top10coins, settop10coins] = useState([])
  const [counter, setCounter] = useState(0)
  let coins10 = []

  const handleQueryChange = (e) =>{
   Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
    let coinSearched = coinRef.current.value

    for(let i =0; i< response.data.length; i++){
        
        if(response.data[i].id == coinSearched ){
            let coinData = response.data[i]
            setCryptodata(coinData)
            console.log(cryptoData)
            setSearchStatus("/coin")
            


        }
        else{

        }
      }
    e.preventDefault()

  })
  }
  useEffect(() =>{
    setCounter(1)
  },[])
  useEffect(() =>{
   
Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
      
      for(let i =0; i< 5; i++){
        let coinData = response.data[i]
        coins10.push(coinData)
      }
      settop10coins(coins10)
      console.log(top10coins)
  })
   
    
  },[counter])

  const Search = (e) => {
    e.preventDefault()
    
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response =>{
    let coinSearched = coinRef.current.value
    for(let i =0; i< response.data.length; i++){
        
        if(response.data[i].id == coinSearched ){
            let coinData = response.data[i]
            coinRef.current.value = ""
            setCryptodata(coinData)
            console.log(cryptoData)
            setSearchStatus("/coin")
            
            return coinData;


        }
        else{
            setSearchStatus("/")

        }

    
    }


    }).catch(error => console.log("error"))

  }

  return (
      <Switch>
<Route exact path="/">
  <div>
    
    <div className="App">
      <div className="outerDiv">
      <h1 className="websiteTitle">Cryptobase<img src="images/btclogo.png" className="btcLogo"></img></h1>
      <p className="sloganCrypto"> google for crypto...</p>

      {/* <p className="coinSearchBarTitle"> Search for your coin...</p> */}
      <form className="searchBar">
        <input type="text" placeholder="Search..." className="coinSearchBar" onChange={handleQueryChange} ref={coinRef}></input>
       <button className="searchBtn" onClick={Search}> <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={searchStatus}>Search</Link></button>
      </form>
        <a href="#topcoinsTitle"><img className="downarrow" id="bounce" src="images/whitearrow.png"></img></a>
    </div>
    
        </div> 
        <Top10coins coins={top10coins} />
</div>

</Route>
<Route path="/coin">
         <CoinData cryptoInfo={cryptoData} />

</Route>

  
</Switch>

  );
}

export default App;
