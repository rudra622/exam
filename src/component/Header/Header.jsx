import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Cart, Search } from 'react-bootstrap-icons';


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark  border-bottom shadow">
                <div className="container">
                    <a className="navbar-brand text-dark" href="">E-commerce</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link text-dark">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">content</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <NavLink to='/buyproduct' className="nav-link text-dark">
                            <Button>
                                <Cart />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </nav>

        </header>
    )
}


export default Header;