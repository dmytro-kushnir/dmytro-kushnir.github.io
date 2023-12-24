import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

import cssClasses from './sidebar.module.scss';

function Sidebar() {
  const config = useConfig(useAppName());

  const {
    driveLinks,
    sidebar: {
      scores,
      semesters,
    },
  } = config;

  return (
    <aside>
      <div className={cssClasses['sidebar-inner']}>
        <div className={cssClasses.intro}>
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
                <li>{`Екзаменаційні тести - ${scores.exam} балів (з них ${scores.presentationMax * 2} за презентації)`}</li>
              </ul>
            </li>
          </ul>

          <h4>Диски для звітності</h4>
          <ul className={cssClasses['disk-list']}>
            {driveLinks.map((link) => (
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
