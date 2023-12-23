import { LabLink } from '../config/configMapping.ts';

interface Props {
  lab: LabLink;
}

function Lab({ lab }: Props) {
  return (
    <div>
      <h2>{lab.name}</h2>
      {/* Other lab details */}
    </div>
  );
}

export default Lab;
