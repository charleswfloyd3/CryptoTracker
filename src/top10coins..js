import React,{useState} from 'react'
import './top10.css'

function Top10coins(props){
let data = props.coins
const [redOrGreen, setredOrGreen] = useState(true)

    return(
        <div className="top10page">

            <section className="top10section">
            <h1 className="topcoinsTitle" id="topcoinsTitle">Hottest Coins on the Market<img src="images/fire.png" style={{height : "4vw"}}></img></h1>

                <ul className="listOfCoins">  
                    {data.map((coin) =>{
                  
                        
                         if(JSON.stringify(coin.price_change_percentage_24h).includes("-")){
                            // setredOrGreen(false)
                            console.log(redOrGreen)
                            
                        }
                       
                 
                    return(
                <li className="listItem" key={coin}>
                    <section className="coinAndLogo">
                         {coin.id[0].toUpperCase()+ coin.id.slice(1)}
                        <img  className="coinImage" src={coin.image} ></img>
                    </section>
                    <section className="percentChange24">
                        <p className={redOrGreen ? "percentChangeGreen": "percentChangeRed"}> {coin.price_change_percentage_24h}</p> 
                    </section>
                    <section className="priceCurrent">
                        <p className="currentPrice10">${coin.current_price}</p>
                        
                    </section>                    
                </li>
                    )
                })}
                
                </ul>
              
            
            </section>
        </div>
    )
};

export default Top10coins;