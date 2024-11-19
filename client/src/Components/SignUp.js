import React from 'react';
import '../Styles/Signup.css'; // Ensure you have this CSS file in the same directory
import Axios from Axios;


const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required>
            <option value="user">User </option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="footer">
        <p>Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  );
}

export default SignUp;