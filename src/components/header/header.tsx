import { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown, Modal, Button,
} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.scss';

import Image from '../image/index.tsx';
import Sidebar from '../sidebar/sidebar.tsx';
import { AppNames } from '../config/configMapping.ts';
import useConfig from '../config/useConfig.ts';

interface Props {
  appName: AppNames;
}

function Header({ appName }: Props) {
  const navigate = useNavigate();
  const config = useConfig(appName);

  const {
    appPath,
    driveLinks,
    header: {
      labList,
      logo,
    },
  } = config;

  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleDropdownToggle = (dropdown: string | null) => {
    setShowDropdown(dropdown);
  };
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className="header">
      <Navbar expand="xl" className="p-0">
        <Container>
          <Link to={appPath}>
            <Image path={logo.url} alt={logo.alt} className="logo" />
          </Link>
          <Navbar.Collapse id="primaryNav" className="justify-content-center order-3 order-xl-2">
            <Nav>
              <Nav.Link as={NavLink} to={appPath} className="active">Головна</Nav.Link>
              <Nav.Link as={NavLink} to={`${appPath}/lectures`}>Лекції</Nav.Link>
              <NavDropdown
                title="Лабораторні"
                id="navbarLabDropdown"
                show={showDropdown === 'lab'}
                onMouseEnter={() => handleDropdownToggle('lab')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                {labList.map((lab) => (
                  <NavDropdown.Item key={lab.id} onClick={() => navigate(`/labs/${lab.id}`)}>
                    {lab.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={NavLink} to={`${appPath}/self-work`}>Самостійна</Nav.Link>
              <NavDropdown
                title="Диски"
                id="navbarDiskDropdown"
                show={showDropdown === 'disk'}
                onMouseEnter={() => handleDropdownToggle('disk')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                {driveLinks.map((link) => (
                  <NavDropdown.Item
                    key={link.name}
                    target="_blank"
                    href={link.drive}
                    rel="noreferrer"
                  >
                    {link.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={NavLink} to={`${appPath}/grades`}>Журнали</Nav.Link>
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
