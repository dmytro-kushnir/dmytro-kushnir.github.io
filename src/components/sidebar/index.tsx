import * as React from 'react';
import useConfig from '../config/useConfig.ts';
import { DriveLink } from '../config/config.ts';

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}

function Sidebar() {
  /* todo - each app should generate own sidebar config,
      so name of the app should be retrieved dynamically.
   */
  const config = useConfig();

  if (config === null) {
    return null;
  }

  const {
    apps: {
      wp: {
        sidebar: {
          driveLinks,
          scores,
          semesters,
        },
      },
    },
  } = config;

  return (
    <aside className="sidebar d-none d-xl-block">
      <div className="sidebar-inner">
        <div className="close-sidebar-wrapper">
          <button aria-label="Close" type="button" onClick={handleClick} className="close-sidebar">
            <i className="las la-times" />
          </button>
        </div>
        <div className="intro">
          <h4>Розподіл балів</h4>
          <ul>
            <li>
              <strong>{`І половина семестру ${semesters.duration.part1}`}</strong>
              <ul>
                <li>{`Лабораторні №1-3 - ${scores.labs / 2} балів`}</li>
                <li>{`Презентація ${scores.presentationMin} - ${scores.presentationMax} балів (додається до тестів)`}</li>
              </ul>
            </li>
            <li>
              <strong>{`IІ половина семестру ${semesters.duration.part1}`}</strong>
              <ul>
                <li>{`Лабораторні №4-6 - ${scores.labs / 2} балів`}</li>
                <li>{`Презентація ${scores.presentationMin} - ${scores.presentationMax} балів (додається до тестів)`}</li>
              </ul>
            </li>
            <li>
              <strong>Протягом семестру</strong>
              <ul>
                <li>{`Самостійна робота - ${scores.selfStudy} балів`}</li>
              </ul>
            </li>
            <li>
              <strong>Залік</strong>
              <ul>
                <li>{`Поточні бали - ${scores.current} балів`}</li>
                <li>{`Екзаменаційні тести - ${scores.exam}} балів (з них ${scores.presentationMax * 2} за презентації)`}</li>
              </ul>
            </li>
          </ul>

          <h4>Диски для звітності</h4>
          <ul className="disk-list">
            {driveLinks.map((link: DriveLink) => (
              <li key={link.name}>
                {link.name}
                <a href={link.drive} target="_blank" rel="noreferrer">Диск</a>
                <a href={link.doc} target="_blank" rel="noreferrer">Журнал</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
