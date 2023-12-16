import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown, Modal, Button,
} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

import Image from '../image/index.tsx';
import Sidebar from '../sidebar/sidebar.tsx';

import cssClasses from './header.module.scss';

function Header() {
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleDropdownToggle = (dropdown: string | null) => {
    setShowDropdown(dropdown);
  };
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // todo to be retrieved from config as well as other props of image
  const logoPath = 'src/apps/web-programming/assets/logo.png';

  return (
    <header className={cssClasses.header}>
      <Navbar expand="xl" className={`${cssClasses.navbar} p-0`}>
        <Container>
          <Link to="/web-programming">
            <Image path={logoPath} alt="Веб-програмування" className={cssClasses.logo} />
          </Link>
          <Navbar.Collapse id="primaryNav" className="justify-content-center order-3 order-xl-2">
            <Nav className="navbar-nav">
              <Nav.Link href="index.html" className={`${cssClasses['nav-link']} active`}>Головна</Nav.Link>
              <Nav.Link href="lecture.html" className={cssClasses['nav-link']}>Лекції</Nav.Link>
              <NavDropdown
                title="Лабораторні"
                id="navbarLabDropdown"
                show={showDropdown === 'lab'}
                onMouseEnter={() => handleDropdownToggle('lab')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <NavDropdown.Item href="work1.html">Лабораторна 1</NavDropdown.Item>
                <NavDropdown.Item href="work2.html">Лабораторна 2</NavDropdown.Item>
                {/* ... Other lab items */}
              </NavDropdown>
              <Nav.Link href="selfwork.html" className={cssClasses['nav-link']}>Самостійна</Nav.Link>
              <NavDropdown
                title="Диски"
                id="navbarDiskDropdown"
                show={showDropdown === 'disk'}
                onMouseEnter={() => handleDropdownToggle('disk')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" rel="noreferrer">КІ-41</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" rel="noreferrer">КІ-41</NavDropdown.Item>
                {/* ... Other lab items */}
              </NavDropdown>
              <Nav.Link href="journal.html" className={cssClasses['nav-link']}>Журнали</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="order-1 order-xl-3">
            <Button aria-label="Open Sidebar" onClick={toggleSidebar} variant="link">
              <FaBars className={cssClasses.hamburger} />
            </Button>
          </div>
          <Modal show={showSidebar} onHide={toggleSidebar} centered>
            <Modal.Header closeButton />
            <Modal.Body>
              <Sidebar />
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
