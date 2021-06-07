import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="row">
          <div>
            <Link className="brand" to="/">Brilliant</Link>
          </div>
          <div className="options">
              <div><Link to="#" className="nav-items" >Today</Link></div>
              <div><Link to="/courses" className="nav-items">Courses</Link></div>
              <div><Link to="#" className="nav-items">Practice</Link></div>
          </div>
          <div className="button">
                <div ><button className="login-btn" >Login</button></div>
                <div ><button className="signup-btn">signup</button></div>
          </div>
        </header>
    )
}

export default Header
