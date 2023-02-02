import React, { Component } from 'react'

export class CalculatorCC extends Component {
    state={
        num1: 0,
        num2: 0,
        total:0
    };
    changeHandler1 = (e)=>{
        this.setState({num1:+e.target.value});
    }
    changeHandler2 = (e)=>{
        this.setState({num2:+e.target.value});
    }
    adition = ()=>{
        this.setState({total:this.state.num1+this.state.num2});
    }
    minus = ()=>{
        this.setState({total:this.state.num1-this.state.num2});
    }
    multi = ()=>{
        this.setState({total:this.state.num1*this.state.num2});
    }
    divid = ()=>{
        this.setState({total:this.state.num1/this.state.num2});
    }


  render() {
    return (
        <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div className="row">
              <div class="col-4">
                <input type="text" class="form-control" onChange={this.changeHandler1}/>
              </div>
              <div class="col-4">
                <input type="text" class="form-control" onChange={this.changeHandler2}/>
              </div>
              <div class="col-4">
                <h6>{this.state.total}</h6>
              </div>
            </div>
            <div className="row mt-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
                <button type="button" class="btn btn-danger" onClick={this.adition}>Add</button>
                <button type="button" class="btn btn-warning" onClick={this.minus}>Minus</button>
                <button type="button" class="btn btn-success" onClick={this.multi}>Multi</button>
                <button type="button" class="btn btn-primary" onClick={this.divid}>Divi</button>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    )
  }
}

export default CalculatorCC