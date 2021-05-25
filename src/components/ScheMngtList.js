import React, { useCallback } from 'react';
import ScheMngtListItem from './ScheMngtListItem';
import './ScheMngtList.scss';
import { List } from 'react-virtualized';

const ScheMngtList = ({ schedules, onRemove, onToggle }) => {
  // console.log(schedules);

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const sche = schedules[index];
      return (
        <ScheMngtListItem
          sche={sche}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, schedules],
  );

  return (
    <List
      className="ScheMngtList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={schedules.length} // 항목 갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링 할 때 쓰는 함수
      list={schedules} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />

    /*<div className="ScheMngtList">
      {schedules.map((sche) => (
        <ScheMngtListItem
          sche={sche}
          key={sche.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>*/
  );
};

export default React.memo(ScheMngtList);
