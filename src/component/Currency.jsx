import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
export default function Crypto() {
  let [coins,setCoins]= useState({
    amount :'',
    from:"egp",
    to:"usd",
  })
  let [currency,setcurrency]= useState("")


useEffect(() => {

},[])

  function getuserdata(e){
  let coin ={...coins};
  coin[e.target.name]=e.target.value;
  setCoins(coin)
  console.log(coin.amount);
}
async function b() {
  let {data} = await axios(
    `https://api.exchangerate.host/convert?from=${coins.from}&to=${coins.to}&amount=${coins.amount}`,
  )
  setcurrency(data)
  console.log(data.result);

}
  return (
    <div className="container d-flex flex-column align-items-center py-5">
      <h1 className='text-center mb-5 pt-3'>Currency Converter</h1>
      <div class="card w-50 bg-black"  >
  <div class="card-body ">
    <div class="form-group ">
    <label for="Amount  ">Amount</label>
    <input type="number" class=" form-control w-50" name='amount'  onChange={getuserdata} id="Amount"/>
    <div class="input-group mb-3">


</div>


</div>
<label for="Amount ">from</label>

<select className="form-select mb-2" id="inputGroupSelect01" name='from' onChange={getuserdata}>
<option  value="egp">EGP</option>

<option  value="USD">USD</option>
    <option  value="aud">AUD</option>
    <option value="eur">EUR</option>
    <option value="gbp">GBP</option>
    <option value="aed">AED</option>
    <option value="sar">SAR</option>
    <option value="NPR">NPR</option>
    <option value="MXN">MXN</option>
    <option value="TRY">TRY</option>
    <option value="CHF">CHF</option>
    <option value="YER">YER</option>
  </select>

  <label for="Amount ">To</label>

  <select className="form-select mb-2" id="inputGroupSelect01" name='to' onChange={getuserdata} >
    <option  value="USD">USD</option>
    <option  value="EGP">EGP</option>
    <option value="eur">EUR</option>
    <option value="gbp">GBP</option>
    <option value="aed">AED</option>
    <option value="sar">SAR</option>
    <option  value="AUD">AUD</option>
    <option value="NPR">NPR</option>
    <option value="MXN">MXN</option>
    <option value="TRY">TRY</option>
    <option value="CHF">CHF</option>
    <option value="YER">YER</option>
  </select>
  <button className='btn btn-outline-primary' onClick={b}>Convert</button>
  {currency.result ?  <h3 class="card-title text-center mb-2" >={currency.result}{coins.to.toLocaleUpperCase()}</h3> :<h3 class="card-title text-center mb-2 d-none" >{coins.amount}{coins.from.toLocaleUpperCase()}={currency.result}{coins.to.toLocaleUpperCase()}</h3>}
{/* {coins.amount !=='' ? <h3 class="card-title text-center mb-2 " >={currency.result}{coins.to.toLocaleUpperCase()}</h3> :<h3 class="card-title text-center mb-2 d-none" >{coins.amount}{coins.from.toLocaleUpperCase()}={currency.result}{coins.to.toLocaleUpperCase()}</h3>} */}
  </div>
</div>
    </div>

  )
}
