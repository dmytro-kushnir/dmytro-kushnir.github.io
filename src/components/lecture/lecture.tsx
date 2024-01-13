import { LectureLink } from '../config/configMapping.ts';

interface PageProps {
    lecture: LectureLink;
}

function LecturePage({ lecture }: PageProps) {
  const pdfPath = `/path/to/${lecture.id}.pdf`;

  return (
    <div>
      <h1>{lecture.name}</h1>
      <iframe src={pdfPath} style={{ height: '600px', width: '100%' }} title={lecture.name} />
    </div>
  );
}

export default LecturePage;
