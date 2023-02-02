//import axios from 'axios';
import React,{useState, useEffect} from 'react'
import Clients from './Api';

function Axios() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)

    // const fetchData = () =>{
    //     axios.get("https://dummyjson.com/products").then((response)=>{
    //       console.log(response);
    //       setdata(response.data.products);
    //     });
    // }

    // useEffect(() => {
    //   setloading(true);
    //   axios.get("https://dummyjson.com/products").then((response)=>{
    //       // console.log(response);
    //       setdata(response.data.products);
    //       setloading(false);
    //     });
    // }, [])

    useEffect(() => {
      setloading(true);
      Clients.get("/products").then((response)=>{
        setdata(response.data.products);
      })     
          setloading(false);
        },[]);
  
    
  return (
    <>
        {/* <button onClick={fetchData}>FETCH</button> */}
        <div className='container'>
        <div className='row' >
        {loading ? <img src="../images/loading.gif" className=" mx-auto d-block" alt="u" /> :null}
            {data.map((product)=>(             
              <div className='col-md-4 p-2'>
                <div key={product.id} className="border p-2" style={{height:'150px'}}>
                  <h5> {product.title}</h5>
                  <p> {product.description}</p>
                  <p> {product.price}</p>
                </div>                
              </div>             
            ))}
            
            </div>
        </div>
    </>
  )
}

export default Axios