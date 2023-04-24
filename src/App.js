import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import UserManagement from './userManagement/UserManagement';
import Analytics from './analytics/Analytics';
import Login from './login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">User Management</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
          </ul>
        </nav>

        <BrowserRouter>
          <Route path="/" exact component={Dashboard} />
          <PrivateRoute path="/users" component={UserManagement} />
          <PrivateRoute path="/analytics" component={Analytics} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </Router>
  );
}

export default App;
