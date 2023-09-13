import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
							<Link className="nav-link active" to="/about">Abouts Us</Link>
							<Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
						</div>
					</div>
				</div>
			</nav>
			<nav className="navbar bg-body-tertiary fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Offcanvas navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" to="/about">Abouts Us</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
								</li>

							</ul>
							<form className="d-flex mt-3" role="search">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Header;