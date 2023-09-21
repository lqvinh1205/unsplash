import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex gap-4 justify-between py-3 px-4 h-[62px] items-center">
      <div className="">Logo</div>
      <div className="flex gap-4 flex-1">
        <div className="flex-1">
          <input
            type="search"
            name=""
            id=""
            className="w-full border border-dashed"
          />
        </div>
        <div>
          <ul className="flex px-4 gap-4">
            <li>Explore</li>
            <li>Advertise</li>
            <li>Unsplash+</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link to="#">Login</Link>
          <button>Submit a photo</button>
        </div>
      </div>
      <div>Toggle</div>
    </div>
  );
};

export default Header;
