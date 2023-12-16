import { Container } from 'react-bootstrap';

function TopBar() {
  return (
    <nav className="topbar">
      <Container>
        <div className="topbar-block">
          <div className="topbar-left">
            <ul>
              <li>
                <a href="https://eom.lpnu.ua/" target="_blank" rel="noreferrer">
                  <i className="las la-building" />
                  {' '}
                  Кафедра ЕОМ
                </a>
              </li>
              <li>
                <a href="https://lpnu.ua/rozklad-zaniat-ta-ekzameniv" target="_blank" rel="noreferrer">
                  <i className="las la-calendar" />
                  {' '}
                  Розклад занять
                </a>
              </li>
              <li>
                <a href="https://vns.lpnu.ua" target="_blank" rel="noreferrer">
                  <i className="las la-chalkboard-teacher" />
                  {' '}
                  ВНС
                </a>
              </li>
            </ul>
          </div>
          <div className="topbar-right">
            <ul>
              <li>
                <a href="mailto:Dmytro.O.Kushnir@lpnu.ua" aria-label="mail" target="_blank" title="Dmytro.O.Kushnir@lpnu.ua" rel="noreferrer">
                  <i className="las la-envelope" />
                </a>
              </li>
              <li>
                <a href="https://t.me/dmytro_kushnir" aria-label="tg" target="_blank" title="+380730189648" rel="noreferrer">
                  <i className="lab la-telegram" />
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
