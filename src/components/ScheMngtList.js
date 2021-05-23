import React from 'react';
import ScheMngtListItem from './ScheMngtListItem';
import './ScheMngtList.scss';

const ScheMngtList = ({ schedules, onRemove, onToggle }) => {
  // console.log(schedules);
  return (
    <div className="ScheMngtList">
      {schedules.map((sche) => (
        <ScheMngtListItem
          sche={sche}
          key={sche.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ScheMngtList;
