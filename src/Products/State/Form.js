import React,{useState} from "react";

function Form() {
    const intialUser = {
      username:'',
      phone:'',
      email:'',
      pass:'',
      state:'',
      gander:'',
      term:''
    }
    const[temp, settemp]=useState({});
    const [user, setuser] = useState(intialUser);
    const [dispaly, setdisplay] = useState("d-none");

    const collectdata=(e)=>{
      e.preventDefault();
        settemp(user);
        setdisplay("d-table");        
    }

  return (
    <div className="bg">
      <div className="container"> 
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12 ">
            <img src="../images/1.png" className="img-fluid mt-5 p-5 img-map" alt="u"/>
            <table className={"table table-striped " + dispaly}>
            <thead>
                <tr>
                  <td>Name</td>
                  <td>Contact No.</td>
                  <td>Email</td>
                  <td>State</td>
                  <td>Password</td>
                  <td>Gander</td>
                  <td>T & C</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{temp.username}</td>
                  <td>{temp.phone}</td>
                  <td>{temp.email}</td>
                  <td>{temp.state}</td>
                  <td>{temp.pass}</td>
                  <td>{temp.gander}</td>
                  <td>{temp.term}</td>
                </tr>
              </tbody>
            </table>
            
            
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 bg-light mt-5 p-5 rounded-3 border border-secondary">
            <h3>Sign Up</h3>
            <form action="/action_page.php" onSubmit={collectdata}>
              <div className="mb-3 mt-3">
                <input type="text" className="form-control"  placeholder="Name" value={user.username} onChange={(e)=>{setuser({...user, username: e.target.value})
              settemp({});
              }}/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Mobile Number" name="phone" value={user.phone} onChange={(e)=>setuser({...user, phone: e.target.value})}/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" name="phone" value={user.email} onChange={(e)=>setuser({...user, email: e.target.value})}/>
              </div>

              <select className="form-select mb-3" name="state" value={user.state} onChange={(e)=>setuser({...user, state: e.target.value})}>
                <option>State</option>
                <option>Andra</option>
                <option>Bihar</option>
                <option>Odisha</option>
                <option>Rajastan</option>
              </select>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" name="pswd" value={user.pass} onChange={(e)=>setuser({...user, pass: e.target.value})}/>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value="Male" onChange={(e)=>setuser({...user, gander: e.target.value})}/>
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value="Female" onChange={(e)=>setuser({...user, gander: e.target.value})}/>
                <label className="form-check-label">Female</label>
              </div>

              <div className="form-check mb-3 mt-2">
                <label className="form-check-label ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="true" onChange={(e)=>setuser({...user, term: e.target.value})}
                  />
                  I agree to the Term and Privacy Policy
                </label>
              </div>
              <button type="submit" value="submit" className="btn btn-info" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
