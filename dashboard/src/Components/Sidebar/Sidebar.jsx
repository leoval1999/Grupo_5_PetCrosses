import React from "react";
import Logo from "../../Assets/images/logo .jpeg"

import {Link} from "react-router-dom";

function Sidebar(){
return (
	<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*<!-- Sidebar - Brand -->*/}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={Logo} alt="Digital House"/>
				</div>
			</Link>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0"/>

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - PetCrosses</span></Link>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"/>

			{/*<!-- Heading -->*/}
			<div className="sidebar-heading">Actions</div>

			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/generos">
					<i className="fas fa-fw fa-folder"></i>
					<span>Generos</span>
				</Link>
			</li>

			

		
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
)
}

export default Sidebar;