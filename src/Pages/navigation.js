import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/productDetails" className="nav-link">
              Product Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productListing" className="nav-link">Product Listing</Link>
          </li>
        </ul>
      </nav>
      <div className="d-flex w-100 mainContent ">
        <Outlet />
      </div>
    </>
  );
}
