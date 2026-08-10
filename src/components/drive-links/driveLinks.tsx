import {
  Container, Tab, Nav, Row, Col,
} from 'react-bootstrap';
import IframeLoader from '../iframe/iframe.tsx';

import './driveLinks.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

interface DriveLinksProps {
  showJournals?: boolean;
  showVariants?: boolean;
}

function canEmbed(url: string | undefined): boolean {
  if (!url) return false;
  return url.includes('docs.google.com') || url.includes('drive.google.com');
}

function DriveLinks({
  showJournals = false,
  showVariants = false,
}: DriveLinksProps) {
  const config = useConfig(useAppName());
  const { driveLinks = [] } = config;

  if (!driveLinks.length) {
    return (
      <Container fluid className="result-block">
        <p className="p-4">Посилання на диски / журнали / варіанти ще не додано в конфіг курсу.</p>
      </Container>
    );
  }

  const primaryHref = (link: (typeof driveLinks)[number]) => {
    if (showVariants && link.variants) return link.variants;
    if (showJournals && link.journal) return link.journal;
    return link.drive;
  };

  const primaryLabel = () => {
    if (showVariants) return 'Відкрити таблицю варіантів';
    if (showJournals) return 'Відкрити журнал';
    return 'Перейти на Google Диск';
  };

  return (
    <Container fluid className="result-block">
      <Tab.Container id="v-pills-tab" defaultActiveKey={driveLinks[0].name}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column me-3 result-title" role="tablist" aria-orientation="vertical">
              {driveLinks.map((link) => (
                <Nav.Item key={link.name}>
                  <Nav.Link eventKey={link.name}>{link.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="result-table">
              {driveLinks.map((link) => {
                const href = primaryHref(link);
                let embedSrc: string | undefined;
                if (showJournals) {
                  embedSrc = link.journal;
                } else if (showVariants) {
                  embedSrc = link.variants;
                }

                return (
                  <Tab.Pane key={link.name} eventKey={link.name}>
                    <h6>
                      {href ? (
                        <a href={href} className="journal-link" target="_blank" rel="noopener noreferrer">
                          {primaryLabel()}
                        </a>
                      ) : (
                        <span className="text-muted">Посилання з’явиться незабаром</span>
                      )}
                      {link.drive && (showJournals || showVariants) && (
                        <>
                          {' · '}
                          <a href={link.drive} className="journal-link" target="_blank" rel="noopener noreferrer">
                            Google Диск
                          </a>
                        </>
                      )}
                    </h6>
                    {embedSrc && canEmbed(embedSrc) && (
                      <IframeLoader src={embedSrc} title={link.name} />
                    )}
                    {embedSrc && !canEmbed(embedSrc) && (
                      <p className="mt-3">
                        Перегляд у вкладці недоступний для цього джерела — відкрийте посилання вище.
                        {showVariants && (
                          <>
                            {' '}
                            Також див. таблицю варіантів у практикумі 2026 (§1.11).
                          </>
                        )}
                      </p>
                    )}
                    {!embedSrc && (showJournals || showVariants) && (
                      <p className="mt-3 text-muted">
                        {showVariants
                          ? 'Таблицю варіантів ще не підключено (потрібен Google Sheets або інше посилання).'
                          : 'Журнал ще не підключено (потрібен Google Sheets).'}
                      </p>
                    )}
                    {!showJournals && !showVariants && !href && (
                      <p className="mt-3 text-muted">
                        Папка Google Drive для цієї групи з’явиться незабаром.
                        Звіти завантажуйте після публікації посилання викладачем.
                      </p>
                    )}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

DriveLinks.defaultProps = {
  showJournals: false,
  showVariants: false,
};

export default DriveLinks;
