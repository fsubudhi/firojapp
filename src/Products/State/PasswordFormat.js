import React, { useState } from 'react';

function PasswordFormat() {
  const [flag, showpass] = useState(true);
  const clickcheck = () => {showpass(!flag)};
  return (
    <div className="container mt-5">
        {/* <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div> */}
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type={flag?"password":"text"}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={clickcheck} />
          <label class="form-check-label" for="exampleCheck1">
            {flag ? 'Show password': 'Hide password'}
          </label>
        </div>
        <button type="" class="btn btn-primary">
          Submit
        </button> 
    </div>
  );
}

export default PasswordFormat;
