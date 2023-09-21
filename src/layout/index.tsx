import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import unsplashLogo from "../assets/logo.svg";
import Header from "../components/header";

const Layout = () => {
  return (
    <div>
      <Helmet>
        <title>Unsplash</title>
        <meta name="description" content="Unsplash application" />
        <link rel="icon" href={unsplashLogo} />
      </Helmet>
      <div>
        <Header />
      </div>
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
