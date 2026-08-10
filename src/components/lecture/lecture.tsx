import {
  Container, Button, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import { LectureLink } from '../config/configMapping.ts';
import cssClasses from './lecture.module.scss';
import IframeLoader from '../iframe/iframe.tsx';
import { isExternalUrl, pdfSrcWithCacheBust } from '../../utils/pdfSrc.ts';

interface PageProps {
    lecture: LectureLink;
}

function LecturePage({ lecture }: PageProps) {
  const config = useConfig(useAppName());
  const { appPath, lecturesList } = config;

  const flatLecturesList: LectureLink[] = lecturesList.flatMap((lec) => (lec.subLectures
    ? [lec, ...lec.subLectures] : [lec]));

  const currentIndex = flatLecturesList.findIndex((l) => l.id === lecture.id);

  const prevLecture = currentIndex > 0 ? flatLecturesList[currentIndex - 1] : null;
  const nextLecture = currentIndex < flatLecturesList.length - 1
    ? flatLecturesList[currentIndex + 1] : null;

  const external = isExternalUrl(lecture.filePath);
  const pdfSrc = pdfSrcWithCacheBust(lecture.filePath, lecture.id, 'lecture');

  return (
    <Container fluid="md" className="my-4 mb-5 pb-4">
      <Row>
        <Col>
          <h1 className="mb-4">{lecture.name}</h1>
          {lecture.description && (
            <p className="mb-3">{lecture.description}</p>
          )}
        </Col>
      </Row>
      <Row className="mt-2 mb-4">
        <Col>
          {prevLecture && (
            <Link to={`${appPath}/lectures/${prevLecture.id}`}>
              <Button variant="primary" className="me-2">Попередня Лекція</Button>
            </Link>
          )}
          {nextLecture && (
            <Link to={`${appPath}/lectures/${nextLecture.id}`}>
              <Button variant="secondary" className="me-2">Наступна Лекція</Button>
            </Link>
          )}
          {external && (
            <a href={lecture.filePath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" className="me-2">Матеріали (GitHub)</Button>
            </a>
          )}
          {!external && lecture.filePath && (
            <a href={lecture.filePath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" className="me-2">Відкрити PDF</Button>
            </a>
          )}
          {lecture.planPath && (
            <a href={lecture.planPath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-secondary">План заняття</Button>
            </a>
          )}
        </Col>
      </Row>
      {!external && lecture.filePath && (
      <Row>
        <Col>
          <IframeLoader
            key={lecture.id}
            className={cssClasses['pdf-iframe']}
            src={pdfSrc}
            title={lecture.name}
          />
        </Col>
      </Row>
      )}
    </Container>
  );
}

export default LecturePage;
