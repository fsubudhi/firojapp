import React, { Component } from 'react'

class FetchApiCC extends Component {
    constructor(props){
        super(props);
        this.state={
            comments:[],
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({comments:data})
        })
    }
  render() {
    return (
      <div className='container'>
        <h1>Use Effect in Class Component</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {this.state.comments.map((comment)=>(
                    comment.id<=200 ?
                    <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>:null
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default FetchApiCC;
