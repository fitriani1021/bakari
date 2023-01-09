import React from "react";
import {Button, Col, Container, Navbar} from 'react-bootstrap'
import {NavLink, useNavigate} from "react-router-dom";

import {StyledNav} from "./styles";
import constants from "../../constants/constants";
import useToken from "../../hooks/useToken";

const menu = [
    { path: constants.ROUTES.MENU, title: "Menu Management" },
    { path: constants.ROUTES.TABLE, title: "Table Management" },
]

const NavBarComp = () => {
    const {removeToken} = useToken();
    const navigate = useNavigate();
    const onLogout = () => {
        removeToken();
        navigate(constants.ROUTES.LOGIN);
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Col>
                    <Navbar.Brand>WMB V1.0.0</Navbar.Brand>
                </Col>
                <Col className="col-3">
                    <StyledNav>
                        {menu?.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className="nav-link mx-3"
                                key={index}
                            >
                                {item.title}
                            </NavLink>
                        ))}
                        <Button variant="outline-danger" onClick={onLogout}>
                            Logout
                        </Button>
                    </StyledNav>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;
