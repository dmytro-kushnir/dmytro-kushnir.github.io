import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown, Modal, Button,
} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.scss';

import Image from '../image/index.tsx';
import Sidebar from '../sidebar/sidebar.tsx';
import { AppNames } from '../config/config.ts';

interface Props {
  appName: AppNames;
}

function Header({ appName }: Props) {
  console.log(appName);

  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleDropdownToggle = (dropdown: string | null) => {
    setShowDropdown(dropdown);
  };
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // todo to be retrieved from config as well as other props of image
  const logoPath = '/images/apps/wp/logo.png';

  return (
    <header className="header">
      <Navbar expand="xl" className="p-0">
        <Container>
          <Link to="/web-programming">
            <Image path={logoPath} alt="Веб-програмування" className="logo" />
          </Link>
          <Navbar.Collapse id="primaryNav" className="justify-content-center order-3 order-xl-2">
            <Nav>
              <Nav.Link href="index.html" className="active">Головна</Nav.Link>
              <Nav.Link href="lecture.html">Лекції</Nav.Link>
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

              <Nav.Link href="selfwork.html">Самостійна</Nav.Link>
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
              <Nav.Link href="journal.html">Журнали</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="order-1 order-xl-3">
            <Button aria-label="Open Sidebar" onClick={toggleSidebar} variant="link">
              <FaBars className="hamburger" />
            </Button>
          </div>
          <Modal show={showSidebar} onHide={toggleSidebar} centered>
            <Modal.Header closeButton />
            <Modal.Body>
              <Sidebar appName={appName} />
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
