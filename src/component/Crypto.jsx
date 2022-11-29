import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

export default function Crypto() {
  let [coins,setCoins]= useState([])
 async function getCrypto(){
let {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false")
setCoins(data)
console.log(data);
}
useEffect(() => {
  getCrypto()

},[])

console.log(coins);

  return (
    <div className="container   py-5">
      <h1 className='text-center mb-5 pt-3'>Cryptocurrency Prices by Market Cap</h1>
      <table  className='table text-white text-white-50'>
      <thead>
        <tr>
          <th>	Coin</th>
          <th>Price</th>
          <th>price change</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
     {coins?.map(coin => 
      <tr  key={coin.id}>
   
        
        <td className='d-flex'>      
      <img className='crypto me-1'  src={coin.image} alt="" />
<h1 className='fs-5 fw-bolder'>{coin.name}</h1>
<p className='ms-1 text-black-50'>{coin.symbol}</p>
</td>
<td className='bg-secondary   bg-opacity-10 '>${coin.current_price}</td>
{coin.price_change_percentage_24h >1 ? <td className='text-success'>{coin.price_change_percentage_24h}%</td> :<td className='text-danger'>{coin.price_change_percentage_24h}%</td>}
<td>${coin.market_cap}</td>
      </tr>
      )}
      </tbody>
    </table>
    </div>
  )
}

