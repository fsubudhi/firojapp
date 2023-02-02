import React, { useEffect,useState } from "react";

function FetchApiFC() {
  const [a, seta] = useState([]);

  useEffect(() => {
    showData();
  },[]);

  const showData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>response.json())
        .then((data)=>{
          // let temp = data.filter(el=>el.id<=200);
          seta(data) 
        })
  };

  return (
    <div className="container">
      <h1>Use Effect in Functional Component</h1>

      {/* <button onClick={showData}>show</button> */}
      <table className="table table-striped border">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
                {a.map((comment)=>(
                  comment.id<=200?
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
  );
}

export default FetchApiFC;
