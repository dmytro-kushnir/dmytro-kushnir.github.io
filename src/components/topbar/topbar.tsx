import { Container } from 'react-bootstrap';

import {
  FaBuilding, FaCalendarAlt, FaChalkboardTeacher, FaEnvelope, FaTelegram, FaGraduationCap,
} from 'react-icons/fa';
import cssClasses from './topbar.module.scss';
import useAppName from '../context/useAppNameContext.ts';
import useConfig from '../config/useConfig.ts';

function TopBar() {
  const config = useConfig(useAppName());

  const { links } = config;

  return (
    <nav className={cssClasses.topbar}>
      <Container>
        <div className={cssClasses['topbar-block']}>
          <div className={cssClasses['topbar-left']}>
            <ul>
              <li>
                <a href={links.eom} target="_blank" rel="noreferrer">
                  <FaBuilding />
                  Кафедра ЕОМ
                </a>
              </li>
              <li>
                <a href={links.scheduleLesson} target="_blank" rel="noreferrer">
                  <FaCalendarAlt />
                  Розклад занять
                </a>
              </li>
              <li>
                <a href={links.scheduleExam} target="_blank" rel="noreferrer">
                  <FaGraduationCap />
                  Розклад Екзаменів
                </a>
              </li>
              <li>
                <a href={links.vle} target="_blank" rel="noreferrer">
                  <FaChalkboardTeacher />
                  ВНС
                </a>
              </li>
            </ul>
          </div>
          <div className={cssClasses['topbar-right']}>
            <ul>
              <li>
                <a href={`mailto:${links.mail}`} aria-label="mail" target="_blank" rel="noreferrer">
                  <FaEnvelope />
                  Пошта
                </a>
              </li>
              <li>
                <a href={links.telegram} aria-label="tg" target="_blank" rel="noreferrer">
                  <FaTelegram />
                  Телеграм
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default TopBar;
