import {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
  const appConfig = useConfig(useAppName());
  const location = useLocation();

  const {
    appPath,
    header: {
      logo,
    },
    labList,
    links,
  } = appConfig;

  const headerRef = useRef<HTMLElement>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleScroll = useCallback(() => {
    // Hysteresis avoids flicker at the threshold on short pages.
    setIsSticky((sticky) => {
      const y = window.scrollY;
      if (!sticky && y > 120) return true;
      if (sticky && y < 40) return false;
      return sticky;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;

    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateHeight)
      : null;
    observer?.observe(el);
    window.addEventListener('resize', updateHeight);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Close open menus when crossing the hamburger / desktop breakpoint.
  useEffect(() => {
    const onResize = () => {
      setShowDropdown(null);
      if (isDesktopScreen()) setShowNavbar(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openDropdownOnHover = (id: string) => {
    if (isDesktopScreen()) setShowDropdown(id);
  };

  const closeDropdownOnHoverLeave = () => {
    if (isDesktopScreen()) setShowDropdown(null);
  };

  const handleDropdownToggle = (id: string) => (isOpen: boolean) => {
    // Hamburger: click/tap only. Desktop uses hover (and CSS), avoid fighting click.
    if (!isDesktopScreen()) {
      setShowDropdown(isOpen ? id : null);
    }
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const toggleNavbar = () => {
    if (isDesktopScreen()) return;
    setShowNavbar((open) => {
      if (open) setShowDropdown(null);
      return !open;
    });
  };

  const closeMobileNav = () => {
    if (!isDesktopScreen()) {
      setShowNavbar(false);
      setShowDropdown(null);
    }
  };

  return (
    <>
      {/* Keep document height when header becomes position:fixed (short pages). */}
      {isSticky && <div style={{ height: headerHeight }} aria-hidden="true" />}
      <header
        ref={headerRef}
        className={`header ${isSticky ? 'sticky-header' : ''}`}
      >
        <Navbar expanded={showNavbar} expand="xl" className="p-0" bg={isSticky ? 'light' : 'transparent'} sticky="top">
          <Container>
            <Link to={`${appPath}/`} className="navbar-brand-link">
              <Image path={logo.url} alt={logo.alt} className="logo" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center order-3 order-xl-2">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to={`${appPath}/`} onClick={closeMobileNav}>Головна</Nav.Link>
                {showLectures && (
                  <Nav.Link as={NavLink} to={`${appPath}/lectures`} onClick={closeMobileNav}>Лекції</Nav.Link>
                )}
                {showLabList && (
                  <NavDropdown
                    title="Лабораторні"
                    id="navbarLabDropdown"
                    show={showDropdown === 'lab'}
                    onToggle={handleDropdownToggle('lab')}
                    onMouseEnter={() => openDropdownOnHover('lab')}
                    onMouseLeave={closeDropdownOnHoverLeave}
                  >
                    {labList.map((lab) => (
                      <NavDropdown.Item
                        key={lab.id}
                        as={NavLink}
                        to={`${appPath}/labs/${lab.id}`}
                        onClick={closeMobileNav}
                      >
                        {lab.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )}

                {showSelfWork && (
                  <Nav.Link as={NavLink} to={`${appPath}/self-work`} onClick={closeMobileNav}>Самостійна</Nav.Link>
                )}
                {showCourseWork && (
                  <Nav.Link as={NavLink} to={`${appPath}/course-work`} onClick={closeMobileNav}>Курсова</Nav.Link>
                )}
                {showArticles && (
                  <Nav.Link as={NavLink} to={`${appPath}/articles`} onClick={closeMobileNav}>Блог</Nav.Link>
                )}
                {showVariants && (
                  <Nav.Link as={NavLink} to={`${appPath}/variants`} onClick={closeMobileNav}>Варіанти</Nav.Link>
                )}
                {showDriveLinks && (
                  <Nav.Link as={NavLink} to={`${appPath}/drives`} onClick={closeMobileNav}>Диски</Nav.Link>
                )}
                {showGrades && (
                  <Nav.Link as={NavLink} to={`${appPath}/grades`} onClick={closeMobileNav}>Журнали</Nav.Link>
                )}
                <NavDropdown
                  title="Курси"
                  id="navbarCoursesDropdown"
                  className="nav-courses"
                  show={showDropdown === 'courses'}
                  onToggle={handleDropdownToggle('courses')}
                  onMouseEnter={() => openDropdownOnHover('courses')}
                  onMouseLeave={closeDropdownOnHoverLeave}
                >
                  {links.courses.map((course) => (
                    <NavDropdown.Item
                      key={course.path}
                      as={NavLink}
                      to={course.path}
                      className={location.pathname.includes(course.path) ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      {course.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
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
    </>
  );
}

export default Header;
