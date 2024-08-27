import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown, Modal, Button,
} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.scss';

import Image from '../image/index.tsx';
import Sidebar from '../sidebar/sidebar.tsx';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import { isDesktopScreen } from '../../utils/utils.ts';

interface HeaderProps {
  config: {
    showArticles?: boolean;
    showCourseWork?: boolean;
    showDriveLinks?: boolean;
    showGrades?: boolean;
    showLabList?: boolean;
    showLectures?: boolean;
    showSelfWork?: boolean;
    showVariants?: boolean;
  };
}

function Header({
  config: {
    showArticles = false,
    showDriveLinks = false,
    showGrades = false,
    showLabList = false,
    showLectures = false,
    showSelfWork = false,
    showCourseWork = false,
    showVariants = false,
  } = {},
}: HeaderProps) {
  const navigate = useNavigate();
  const appConfig = useConfig(useAppName());

  const {
    appPath,
    driveLinks,
    header: {
      logo,
    },
    labList,
  } = appConfig;

  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleDropdownToggle = (dropdown: string | null) => {
    setShowDropdown(dropdown);
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleNavbar = () => !isDesktopScreen() && setShowNavbar(!showNavbar);

  return (
    <header className={`header ${isSticky ? 'sticky-header' : ''}`}>
      <Navbar expanded={showNavbar} expand="xl" className="p-0" bg={isSticky ? 'light' : 'transparent'} sticky="top">
        <Container>
          <Link to={`${appPath}/`}>
            <Image path={logo.url} alt={logo.alt} className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center order-3 order-xl-2">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to={`${appPath}/`} onClick={toggleNavbar}>Головна</Nav.Link>
              {showLectures && (<Nav.Link as={NavLink} to={`${appPath}/lectures`} onClick={toggleNavbar}>Лекції</Nav.Link>)}
              {showLabList && (
              <NavDropdown
                title="Лабораторні"
                id="navbarLabDropdown"
                show={showDropdown === 'lab'}
                onMouseEnter={() => handleDropdownToggle('lab')}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                {labList.map((lab) => (
                  <NavDropdown.Item
                    key={lab.id}
                    onClick={() => {
                      navigate(`${appPath}/labs/${lab.id}`);
                      toggleNavbar();
                    }}
                  >
                    {lab.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              )}

              {showSelfWork && (<Nav.Link as={NavLink} to={`${appPath}/self-work`} onClick={toggleNavbar}>Самостійна</Nav.Link>)}
              {showCourseWork && (<Nav.Link as={NavLink} to={`${appPath}/course-work`} onClick={toggleNavbar}>Курсова</Nav.Link>)}
              {showArticles && (<Nav.Link as={NavLink} to={`${appPath}/articles`} onClick={toggleNavbar}>Статті</Nav.Link>)}
              {showVariants && (<Nav.Link as={NavLink} to={`${appPath}/variants`} onClick={toggleNavbar}>Варіанти</Nav.Link>)}
              {showDriveLinks && (
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
                    onClick={toggleNavbar}
                  >
                    {link.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              )}
              {showGrades && (<Nav.Link as={NavLink} to={`${appPath}/grades`} onClick={toggleNavbar}>Журнали</Nav.Link>)}
            </Nav>
          </Navbar.Collapse>
          <div className="order-1 d-none d-xl-block order-xl-3">
            <Button aria-label="Open Sidebar" onClick={toggleSidebar} variant="link">
              <FaBars className="hamburger" />
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
