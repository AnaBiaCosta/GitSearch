import React from 'react'
import { Body, Brand, Nav, NavList, NavItem } from './Navbar.style'

const Navbar = () => (
  <Body>
    <Brand src="https://i.ya-webdesign.com/images/github-logo-png.png" />
    <Nav>
      <NavList>
        <NavItem>Pull requests</NavItem>
        <NavItem>Issues</NavItem>
        <NavItem>Marketplace</NavItem>
        <NavItem>Explore</NavItem>
      </NavList>
    </Nav>
  </Body>
)

export default Navbar
