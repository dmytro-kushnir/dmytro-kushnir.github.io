import { useState } from 'react';
import {
  Button, Modal,
} from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import cssClasses from './footer.module.scss';
import Sidebar from '../sidebar/sidebar.tsx';

function Footer() {
  const config = useConfig(useAppName());
  const { links } = config;

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <footer className="footer">
      <ul className={cssClasses['footer-list']}>
        <li><a href={links.department} target="_blank" rel="noreferrer" className="d-block d-xl-none">Кафедра ЕОМ</a></li>
        <li><a href={links.institute} target="_blank" rel="noreferrer">ІКТА</a></li>
        <li><a href={links.university} target="_blank" rel="noreferrer">НУ Львівська політехніка</a></li>
        <li><a href={`mailto:${links.mail}`} target="_blank" rel="noreferrer">{links.mail}</a></li>
        <li><a href={links.telegram} target="_blank" rel="noreferrer">{links.telegram}</a></li>
        <li><Button onClick={toggleSidebar} variant="outline-light" className="d-block d-xl-none">Дедлайни та оцінки</Button></li>
        <Modal show={showSidebar} onHide={toggleSidebar} centered>
          <Modal.Header closeButton />
          <Modal.Body>
            <Sidebar />
          </Modal.Body>
        </Modal>
      </ul>
    </footer>
  );
}

export default Footer;
