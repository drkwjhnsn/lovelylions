import React from 'react';

const SignIn = (props) => (
  <div className="sign-in">
    <h3>Sign In</h3>
    <form>
      <input type="text" placeholder="userName" />
      <input type="text" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  </div>
);

export default SignIn;
