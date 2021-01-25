import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavClass} from './styles'

export const NavTeacherList = () => (
    <NavClass expand="lg">
        <NavClass.Brand >
            Escola 'mySchool'
        </NavClass.Brand>
        <NavClass.Toggle aria-controls="basic-navbar-nav" />
        <NavClass.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/teacherpage">Professores</Nav.Link>
            <Nav.Link href="/class/:id/grades">Agenda</Nav.Link>
            <Nav.Link href="/classpage">Turmas</Nav.Link>
        </Nav>
        </NavClass.Collapse>
    </NavClass>
)

export const NavTeacherListBottom = () => (
    <NavClass expand="lg">
        <Nav className="mr-auto">
            <Nav.Link href="/teacherpage">Cadastrar</Nav.Link>
        </Nav>
    </NavClass>
)