import React from 'react'
import { Nav, Tab, Tabs } from 'react-bootstrap'
import { Navmenu } from './styles'
import { NavIcon } from '/assets/Images'

export const NavbarStudent = () => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="/student">
            <NavIcon />{' '}
            Teach
        </Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
        </Navmenu.Collapse>
    </Navmenu>
)