import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Messages</Link>
          </li>
        </ul>
      </nav>
      <div className="text-center font-bold">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
