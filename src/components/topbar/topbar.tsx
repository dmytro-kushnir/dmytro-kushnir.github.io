import { Container } from 'react-bootstrap';

import {
  FaBuilding, FaCalendarAlt, FaChalkboardTeacher, FaEnvelope, FaTelegram,
} from 'react-icons/fa';
import cssClasses from './topbar.module.scss';
import { AppNames } from '../config/config.ts';

interface Props {
  appName: AppNames;
}

function TopBar({ appName }: Props) {
  console.log(appName);

  return (
    <nav className={cssClasses.topbar}>
      <Container>
        <div className={cssClasses['topbar-block']}>
          <div className={cssClasses['topbar-left']}>
            <ul>
              <li>
                <a href="https://eom.lpnu.ua/" target="_blank" rel="noreferrer">
                  <FaBuilding />
                  Кафедра ЕОМ
                </a>
              </li>
              <li>
                <a href="https://lpnu.ua/rozklad-zaniat-ta-ekzameniv" target="_blank" rel="noreferrer">
                  <FaCalendarAlt />
                  Розклад занять
                </a>
              </li>
              <li>
                <a href="https://vns.lpnu.ua" target="_blank" rel="noreferrer">
                  <FaChalkboardTeacher />
                  ВНС
                </a>
              </li>
            </ul>
          </div>
          <div className={cssClasses['topbar-right']}>
            <ul>
              <li>
                <a href="mailto:Dmytro.O.Kushnir@lpnu.ua" aria-label="mail" target="_blank" title="Dmytro.O.Kushnir@lpnu.ua" rel="noreferrer">
                  <FaEnvelope />
                  Пошта
                </a>
              </li>
              <li>
                <a href="https://t.me/dmytro_kushnir" aria-label="tg" target="_blank" title="+380730189648" rel="noreferrer">
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
