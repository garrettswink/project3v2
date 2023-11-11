import { Link, useMatch, useResolvedPath  } from "react-router-dom";
import "../styles/Navbar.css";
import { useImperativeHandle } from "react";


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Finance Tracker
      </Link>
    
      <ul>
        <CustomLink to="/">Logout</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li> 
  )
}
