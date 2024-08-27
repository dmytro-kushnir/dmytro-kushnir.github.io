import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

import cssClasses from './sidebar.module.scss';

function Sidebar() {
  const config = useConfig(useAppName());

  const {
    driveLinks = [],
    sidebar: { showScores = false, showDriveLinks = false, sections = [] } = {},
  } = config;

  return (
    <aside>
      <div className={cssClasses['sidebar-inner']}>
        <div className={cssClasses.intro}>
          {showScores && (
            <>
              <h4>Розподіл балів</h4>
              <ul>
                {sections.map((section) => (
                  <li key={section.title}>
                    <strong>{section.title}</strong>
                    <ul>
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}

          {showDriveLinks && (
          <>
            <h4>Диски для звітності</h4>
            <ul className={cssClasses['disk-list']}>
              {driveLinks.map((link) => (
                <li key={link.name}>
                  {link.name}
                  <a href={link.drive} target="_blank" rel="noreferrer">Диск</a>
                  <a href={link.journal} target="_blank" rel="noreferrer">Журнал</a>
                </li>
              ))}
            </ul>
          </>
          )}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
