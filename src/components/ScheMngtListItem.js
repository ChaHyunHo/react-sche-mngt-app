import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './ScheMngtListItem.scss';

const ScheMngtListItem = ({ sche, onRemove, onToggle }) => {
  const {id, text, checked } = sche;

  return (
    <div className="ScheMngtListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)} >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default ScheMngtListItem;
