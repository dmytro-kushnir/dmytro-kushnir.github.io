import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown,
} from 'react-bootstrap';

import Image from '../image/index.tsx';

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}
function Header() {
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string | null) => {
    setShowDropdown(dropdown);
  };

  // todo to be retrieved from config as well as other props of image
  const logoPath = 'src/apps/web-programming/assets/logo.png';

  return (
    <header className="header">
      <Navbar expand="xl">
        <Container>
          <Link to="/web-programming">
            <Image path={logoPath} alt="Веб-програмування" className="logo" />
          </Link>

          <Navbar.Collapse id="primaryNav" className="justify-content-center order-3 order-xl-2">
            <Nav className="navbar-nav">
              <Nav.Link href="index.html" className="nav-link active">Головна</Nav.Link>
              <Nav.Link href="lecture.html" className="nav-link">Лекції</Nav.Link>
              <NavDropdown
                title="Лабораторні"
                show={showDropdown === 'lab'}
                onMouseEnter={() => handleDropdownToggle('lab')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <NavDropdown.Item href="work1.html">Лабораторна 1</NavDropdown.Item>
                <NavDropdown.Item href="work2.html">Лабораторна 2</NavDropdown.Item>
                {/* ... Other lab items */}
              </NavDropdown>
              <Nav.Link href="selfwork.html" className="nav-link">Самостійна</Nav.Link>
              <NavDropdown
                title="Диски"
                show={showDropdown === 'disk'}
                onMouseEnter={() => handleDropdownToggle('disk')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" rel="noreferrer">КІ-41</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" rel="noreferrer">КІ-41</NavDropdown.Item>
                {/* ... Other lab items */}
              </NavDropdown>
              <Nav.Link href="journal.html" className="nav-link">Журнали</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-out order-2 order-xl-3">
            <div>
              <button aria-label="Open Sidebar" onClick={handleClick} className="d-none d-xl-block open-sidebar" type="button">
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>

          {/* <Navbar.Toggle aria-label="Toggle Primary Nav"> */}
          {/*  <FaBars /> */}
          {/* </Navbar.Toggle> */}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
