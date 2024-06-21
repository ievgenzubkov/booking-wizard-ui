'use client';

import Login from "./login";

export default function Header() {    
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Booking Wizard</a>
                    <Login></Login>
                </div>
            </nav>
        </>
    );
  }