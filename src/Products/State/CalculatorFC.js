import React,{useState} from "react";

function CalculatorFC() {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [total, settotal] = useState(0);

    const changeHandler1 = (e)=>{
        setnum1(+e.target.value)
    }
    const changeHandler2 = (e)=>{
        setnum2(+e.target.value)
    }
    const adition = ()=>{
        settotal(num1+num2)
    }
    const minus = ()=>{
        settotal(num1-num2)
    }
    const multi = ()=>{
        settotal(num1*num2)
    }
    const divid = ()=>{
        settotal(num1/num2)
    }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">c:
        
          <div className="row">
            <div class="col-4">
              <input type="text" class="form-control" onChange={changeHandler1}/>
            </div>
            <div class="col-4">
              <input type="text" class="form-control" onChange={changeHandler2}/>
            </div>
            <div class="col-4">
              <h6>{total}</h6>
            </div>
          </div>
          <div className="row mt-2">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
              <button type="button" class="btn btn-danger" onClick={adition}>Add</button>
              <button type="button" class="btn btn-warning" onClick={minus}>Minus</button>
              <button type="button" class="btn btn-success" onClick={multi}>Multi</button>
              <button type="button" class="btn btn-primary" onClick={divid}>Divi</button>
            </div>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default CalculatorFC;
