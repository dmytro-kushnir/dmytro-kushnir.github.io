import {
  Container, Button, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import { LectureLink } from '../config/configMapping.ts';
import cssClasses from './lecture.module.scss';
import IframeLoader from '../iframe/iframe.tsx';

interface PageProps {
    lecture: LectureLink;
}

function LecturePage({ lecture }: PageProps) {
  const config = useConfig(useAppName());
  const { appPath, lecturesList } = config;

  const flatLecturesList: LectureLink[] = lecturesList.flatMap((lec) => (lec.subLectures
    ? [lec, ...lec.subLectures] : [lec]));

  // Find the index of the current lecture
  const currentIndex = flatLecturesList.findIndex((l) => l.id === lecture.id);

  // Determine the previous and next lecture
  const prevLecture = currentIndex > 0 ? flatLecturesList[currentIndex - 1] : null;
  const nextLecture = currentIndex < flatLecturesList.length - 1
    ? flatLecturesList[currentIndex + 1] : null;

  return (
    <Container fluid="md" className="my-4">
      <Row>
        <Col>
          <h1 className="mb-4">{lecture.name}</h1>
        </Col>
      </Row>
      <Row className="mt-2 mb-4">
        <Col>
          {/* Example navigation buttons */}
          {prevLecture && (
            <Link to={`${appPath}/lectures/${prevLecture.id}`}>
              <Button variant="primary" className="me-2">Попередня Лекція</Button>
            </Link>
          )}
          {nextLecture && (
            <Link to={`${appPath}/lectures/${nextLecture.id}`}>
              <Button variant="secondary">Наступна Леція</Button>
            </Link>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <IframeLoader className={cssClasses['pdf-iframe']} src={lecture.filePath} title={lecture.name} />
        </Col>
      </Row>
    </Container>
  );
}

export default LecturePage;
