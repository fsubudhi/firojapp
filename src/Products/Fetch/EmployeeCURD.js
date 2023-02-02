import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function EmployeeCURD() {
  const [Employees, setEmployees] = useState([]);
  const [loading, setloading] = useState(false);
  const [emp, setemp] = useState({});
  const [selectedEMP, setselectedEMP] = useState({});
  const [isedit, setisedit] = useState(false);
  const [view, setview] = useState({})

  // useEffect(()=>{
  //     fetchEmployee();
  // });

  const fetchEmployee = async () => {
    setloading(true);
    const collectData = await axios.get("http://localhost:4000/employees");
    setEmployees(collectData.data);
    setloading(false);
    // console.log(collectData.data);
  };

  const deleteEmployee = async (id) => {    
    const removeROW = await axios.delete(`http://localhost:4000/employees/${id}`);
    Swal.fire("DELETED", "Product Deleted Successfully", "success");    
    fetchEmployee();    
  };

  const addEmployee = async() => {
    // e.preventDefault();
    const addproduct = await axios.post("http://localhost:4000/employees", emp);
    Swal.fire("ADDED", "Product Added Successfully", "success");
    // console.log(addproduct);
    
    fetchEmployee();
  };

  const editEmployee = (data) => {
    setisedit(true);
     setselectedEMP(data);
  };
  const viewEmployee = (data)=>{
    setview(data);
    //alert(data.first_name);
  }
  const updateEmployee = async () => {
     await axios.patch(`http://localhost:4000/employees/${selectedEMP.id}`, selectedEMP);
    Swal.fire("Updated", "Product Added Successfully", "success");
    setisedit(false);
    fetchEmployee();
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
          <h2 className="text-center">Employee Curd Operation</h2>
            <button onClick={fetchEmployee} className="btn btn-info">
              Show Employees <i className="bi bi-arrow-down-square"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">           
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Employees.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {deleteEmployee(data.id)}}
                        >
                          <i className="bi bi-trash3"></i>
                        </button>

                        <button type="button" className="btn btn-warning"
                         onClick={() => {viewEmployee(data)}}
                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-person-square"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {editEmployee(data)}} >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {loading ? (
              <img src="../images/loading.gif" className="img-fluid" alt="u" />
            ) : null}
          </div>





          {!isedit ? (
            <div className="col-md-4">
              <h4>Add New Employee</h4>
              <input
                placeholder="Employee Id"
                className="p-1 m-1"
                name="id"
                onChange={(e) => {
                  setemp({ ...emp, id: +e.target.value });
                }}
                />
              <br />
              <input
                placeholder="First Name"
                className="p-1 m-1"
                name="first_name"
                onChange={(e) => {
                  setemp({ ...emp, first_name: e.target.value });
                }}
              />
              <br />
              <input
                placeholder="Last Name"
                className="p-1 m-1"
                name="last_name"
                onChange={(e) => {
                  setemp({ ...emp, last_name: e.target.value });
                }}
              />
              <br />
              <input
                placeholder="Email"
                className="p-1 m-1"
                name="email"
                onChange={(e) => {
                  setemp({ ...emp, email: e.target.value });
                }}
              />
              <br />
              <button
                className="btn btn-sm btn-primary mt-3"
                onClick={(e) => addEmployee()}>
                <i className="bi bi-arrow-left-square"> </i> Add New Employee
              </button>
            </div>
          ) : (
           <div className="col-md-4">
              <h4>Edit Employee</h4>
              <input placeholder="Employee Id" className="p-1 m-1" name="id"
                value={selectedEMP.id}
                onChange={(e) => {
                  setselectedEMP({...selectedEMP, id: e.target.value});
                }} 
                disabled/>
              <br />
              <input
                placeholder="First Name"
                className="p-1 m-1"
                name="first_name"
                value={selectedEMP.first_name}
                onChange={(e) => {
                  setselectedEMP({...selectedEMP, first_name: e.target.value });
                }}
              />
              <br />
              <input
                placeholder="Last Name"
                className="p-1 m-1"
                name="last_name"
                value={selectedEMP.last_name}
                onChange={(e) => {
                  setselectedEMP({ ...selectedEMP, last_name: e.target.value });
                }}
              />
              <br />
              <input
                placeholder="Email"
                className="p-1 m-1"
                name="email"
                value={selectedEMP.email}
                onChange={(e) => {
                  setselectedEMP({ ...selectedEMP, email: e.target.value });
                }}
              />
              <br />
              <button
                className="btn btn-sm btn-info mt-3"
                onClick={updateEmployee}
              >
                <i className="bi bi-arrow-repeat"></i> Update Employee
              </button>
            </div>
          )}
          {/* ---------------------Madal Start--------------- */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{view.first_name}'s Information</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body"> 
                      <table className="table table-striped border userinfo">
                        <tbody>
                          <tr>
                            <td style={{width:'40%'}}>
                              <img src="../images/dummy.png" alt="" className="rounded border img-fluid"/>
                            </td>
                            <td>
                              <p className="mt-5">Employee ID: {view.id}</p>
                              <p>Name: {view.first_name} {view.last_name}</p>
                              <p>Email: {view.email}</p>
                            </td>                            
                          </tr>
                        </tbody>
                      </table>
                </div>
                <div className="modal-footer bg-success">                  
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------Madal end--------------- */}
          

          {/* <div className='col-md-4'>
                    <input placeholder="Employee Id" className='p-1 m-1' name="" /><br/>
                    <input placeholder="First Name" className='p-1 m-1'/><br/>
                    <input placeholder="Last Name" className='p-1 m-1'/><br/>
                    <input placeholder="Email" className='p-1 m-1'/><br/>                    
                    <button className="btn btn-sm btn-primary mt-3" onClick={editEmployee}><i className="bi bi-arrow-repeat"></i> Update Employee</button>
                </div> */}
        </div>
      </div>
      {/* <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" style={{size:'30px'}}/>
        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
      </div> */}
    </>
  );
}

export default EmployeeCURD;
