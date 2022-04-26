import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

function Navbar() {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/events" activeStyle>
						Events
					</NavLink>
					<NavLink to="/annual" activeStyle>
						Annual Report
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/">Button</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
}

export default Navbar;
