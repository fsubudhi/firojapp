import React, { Component } from 'react'

export class EventHandlerCC extends Component {
    state={
        num1:0,
        num2:0,
        total:0
    };
    adtion = ()=>{
        this.setState({total: this.state.num1 + this.state.num2});
    };
    handler = (event)=>{
        const {name, value}=event.target;
        this.setState({[name]:+value});
    };



  render() {
    return (
        <div className='container mt-4'>
        <div className='row'>
            <div className='col-12'>
                <input name='num1' onChange={this.handler}/><br/>
                <input name='num2' onChange={this.handler}/>
                <p>Total: {this.state.total}</p>
                <button onClick={this.adtion}>ADD</button>
            </div>
        </div>
    </div>
    )
  }
}

export default EventHandlerCC