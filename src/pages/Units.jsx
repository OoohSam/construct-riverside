import React from 'react';
import UnitSection from '../components/UnitSection';

const Units = ({ onOpenModal }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <UnitSection onInquire={onOpenModal} />
    </div>
  );
};
export default Units;