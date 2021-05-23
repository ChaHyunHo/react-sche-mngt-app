import logo from './logo.svg';
import './App.css';
import ScheMngtTemplate from './components/ScheMngtTemplate';
import ScheMngtInsert from './components/ScheMngtInsert';
import ScheMngtList from './components/ScheMngtList';
import { useCallback, useRef, useState } from 'react';

const App = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유 id 값
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const sche = {
        id: nextId.current,
        text,
        checked: false,
      };
      setSchedules(schedules.concat(sche));
      nextId.current += 1;
    },
    [schedules],
  );

  const onRemove = useCallback(
    (id) => {
      setSchedules(schedules.filter((sche) => sche.id !== id));
    },
    [schedules],
  );

  const onToggle = useCallback(
    id => {
      setSchedules(
          schedules.map(sche =>
              sche.id === id ? {...sche, checked : !sche.checked} : sche,
          ),
      );
    },
    [schedules]
  );

  return (
    <ScheMngtTemplate>
      <ScheMngtInsert onInsert={onInsert} />
      <ScheMngtList schedules={schedules} onRemove={onRemove} onToggle={onToggle} />
    </ScheMngtTemplate>
  );
};

export default App;
