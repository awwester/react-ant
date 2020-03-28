import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
