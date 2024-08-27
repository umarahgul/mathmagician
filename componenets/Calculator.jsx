import React from "react";

function Calculator(){
return<>
<Lcd>

</Lcd>
<Operations>

</Operations>
<Numbers>

</Numbers>
</>
}
function Lcd(){
    return <div className="lcd"></div>
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
  <div className="numbers">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>0</div>
  </div>
}

export default Calculator;