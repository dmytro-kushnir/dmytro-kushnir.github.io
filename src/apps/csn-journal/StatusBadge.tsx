import React from 'react';
import { Badge } from 'react-bootstrap';

interface StatusBadgeProps {
    status: string;
}

// eslint-disable-next-line react/function-component-definition
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let variant: string;

  switch (status) {
    case 'In Review':
      variant = 'warning';
      break;
    case 'Requires Update':
      variant = 'danger';
      break;
    case 'Approved':
      variant = 'success';
      break;
    default:
      variant = 'secondary';
  }

  return <Badge bg={variant}>{status}</Badge>;
};

export default StatusBadge;
