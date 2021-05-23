import React from 'react';
import './ScheMngtTemplate.scss';

const ScheMngtTemplate = ({ children }) => {
  return (
    <div className="ScheMngtTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ScheMngtTemplate;
