import React from "react";
import './Calculator.css';

function Calculator(){
return(<div className="main">
<Lcd>
</Lcd>
<Container></Container>

</div>)
}
function Lcd(){
    return <div className="lcd"></div>
}

function Container(){
return(<div className="container">

<Numbers>

</Numbers>
<Operations>

</Operations>
</div>)

}


function Operations(){
    return<div className="operations">
        <div id="plus"> + </div>
        <div id="minus"> - </div>
        <div id="divide"> /</div>
        <div id="multiply">*</div>
        <div id="equals">=</div>
    </div>
}

function Numbers(){
    return(
  <div className="numbers">
    <div>AC</div>
    <div>+/-</div>
    <div>%</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div id="zero">0</div>
  </div>)
}

export default Calculator;