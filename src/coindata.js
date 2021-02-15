import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios'
import './coindata.css';
import axios from 'axios';
import Navbar from './navbar';

function CoinData(props) {
  let data = props.cryptoInfo;
  console.log(data)
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className="secondpagediv">
      <Navbar coinImage={data.image} />

    <div className="coinData1">

      <div className="coinStuff">

        <section className="coinRow1" >   
          {data.id == undefined ?  <p className="coinName"> {data.id} </p>
          :<p className="coinName"> {data.id[0].toUpperCase() + data.id.slice(1)}</p>
          }
          <img src={data.image} className="coinLogo" ></img>
          {data.id == undefined ?  <p className="coinPrice">${data.current_price}</p>
 
          :<p className="coinPrice" style={{color: JSON.stringify(data.price_change_percentage_24h).includes("-") ? "red" : "lime"}}> ${data.current_price}</p>
          }
      </section>

      <section className="coinRow2">
          {/* <p className="coinSymbol">({data.symbol})</p>
          <p className="coin24hrchangepercentage">24hrs(%): {data.price_change_percentage_24h}</p>

          <p className="coin24hrchangemoney">24hrs($):  {data.price_change_24h}</p> */}

      </section>

      <section className="coinRow3">

      </section>

      <section className="coinRow4">

      </section>
     </div>
    </div>
    </div>
  );
}

export default CoinData;
