import React from 'react';
import "./MutualFund.css"


function TypesOfFunds() {



  return (
    <>
    
    <div className='div2'>



       <div className='description' >
       
        <h3 className='Simplifying1'>
        Various types of Mutual Fund schemes exist to cater to different needs of different people. Largely there are three types mutual funds.
        </h3>
      
     
       
      
        <h1 style={{textAlign:"left", marginBottom: "1em", color: "#2196f3"} }>
        1. Equity or Growth Funds
        </h1>

        <div class="list-container1">
    <ul>
      <li class="list-item">
        These invest predominantly in equities i.e. shares of companies. The primary objective is wealth creation or capital appreciation.
      </li>
      
         <span style={{color:"#514e4e", fontSize: "1.5em"}}> Examples would be:</span>
         <li class="list-item">
        <ul class="sub-list1">
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Large Cap" </strong>funds which invest predominantly in companies that run large established business</li>
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Mid Cap" </strong>funds which invest in mid-sized companies</li>
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Small Cap"</strong> funds that invest in small-sized companies</li>
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Multi Cap" </strong>funds that invest in a mix of large, mid, and small-sized companies</li>
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Sector"</strong> funds that invest in companies related to one type of business (e.g., Technology funds that invest only in technology companies)</li>
          <li class="list-item"><strong style={{color: "#7341c8"}}>"Thematic" </strong>funds that invest in a common theme (e.g., Infrastructure funds that invest in companies that will benefit from the growth in the infrastructure segment)</li>
          <li class="list-item"><strong >Tax-Saving Funds</strong></li>
        </ul>
      </li>
    </ul>
    <div className='iframe'>
    <iframe width="560" height="415" src="https://www.youtube.com/embed/OwSdwgsvnVQ"
     title="YouTube video player"
      frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
    </div>
  </div>

  <h1 style={{textAlign:"left", marginBottom: "1em", color: "#2196f3"} }>
        2. Income or Bond or Fixed Income Funds
        </h1>

        <div class="list-container">
    <ul>
      
         <li class="list-item">
        <ul class="sub-list">
          <li class="list-item">These invest in Fixed Income Securities, like Government Securities or Bonds, Commercial Papers and Debentures, Bank Certificates of Deposits and Money Market instruments like Treasury Bills, Commercial Paper, etc.</li>
          <li class="list-item">These are relatively <strong>safer investments </strong>  and are suitable for Income Generation.</li>
          <li class="list-item">Examples would be <strong>Liquid Funds </strong> , Short Term, Floating Rate, Corporate Debt, Dynamic Bond, Gilt Funds, etc.</li>
        </ul>
      </li>
    </ul>
  </div>


  <h1 style={{textAlign:"left", marginBottom: "1em", color: "#2196f3"} }>
        3. Hybrid Funds
        </h1>

        <div class="list-container">
    <ul>
      
         <li class="list-item">
        <ul class="sub-list">
          <li class="list-item">These invest in both Equities and Fixed Income, thus offering the best of both,<strong> Growth Potential </strong> as well as <strong>Income Generation</strong>.</li>
          <li class="list-item">Examples would be Aggressive Balanced Funds, Conservative Balanced Funds, Pension Plans, Child Plans and Monthly Income Plans, etc. </li>
          <li class="list-item">Examples would be Liquid Funds, Short Term, Floating Rate, Corporate Debt, Dynamic Bond, Gilt Funds, etc.</li>
        </ul>
      </li>
    </ul>
  </div>


</div>



</div>

<div className='points'>

  
</div>

    </>
);
}
export default TypesOfFunds;