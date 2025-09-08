import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import { LectureLink } from '../config/configMapping.ts';
import { isMobileDevice } from '../../utils/utils.ts';

/**
 * Renders a single lecture in the list of lectures.
 *
 * @param {LectureLink} lecture - The lecture to render.
 * @param {number} index - The index of the lecture in the list.
 * @param {string} appPath
 * @returns {JSX.Element} The rendered lecture.
 */
function renderLecture(lecture: LectureLink, index: number, appPath: string): JSX.Element {
  const baseUrl = window.location.origin;

  return (
    <React.Fragment key={lecture.id}>
      <ListGroup.Item as="li" className="d-flex align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {lecture.name}
          </div>
          {lecture.subLectures && (
            <ListGroup as="ol">
              {lecture.subLectures.map((subLecture, subIndex) => (
                <ListGroup.Item as="li" key={subLecture.id}>
                  {index + 1}
                  .
                  {subIndex + 1}
                  {' '}
                  {subLecture.name}
                  { isMobileDevice()
                    ? <a href={`${baseUrl}${subLecture.filePath}`} target="_blank" rel="noopener noreferrer">Переглянути</a>
                    : <Link to={`${appPath}/lectures/${subLecture.id}`}>Переглянути</Link>}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
        { isMobileDevice()
          ? <a href={`${baseUrl}${lecture.filePath}`} target="_blank" rel="noopener noreferrer">Переглянути</a>
          : <Link to={`${appPath}/lectures/${lecture.id}`}>Переглянути</Link>}
      </ListGroup.Item>
    </React.Fragment>
  );
}

function Lectures() {
  const config = useConfig(useAppName());
  const { appPath, lecturesList } = config;

  return (
    <main className="container container-narrow">
      <ListGroup as="ol" numbered className="mb-5">
        {lecturesList.map((lecture, index) => renderLecture(lecture, index, appPath))}
      </ListGroup>
    </main>
  );
}

export default Lectures;
