import logo from './logo.svg';
import './App.css';
import ScheMngtTemplate from './components/ScheMngtTemplate';
import ScheMngtInsert from './components/ScheMngtInsert';
import ScheMngtList from './components/ScheMngtList';
import { useCallback, useRef, useState } from 'react';


function createBulkSche() {
    const array = [];
    for(let i = 1; i <= 2500; i++) {
        array.push({
            id : i,
            text : `할 일 ${i}`,
            checked : false,
        });
    }

    return array;
}

const App = () => {
  const [schedules, setSchedules] = useState(createBulkSche());

  // 고유 id 값
  const nextId = useRef(2501);

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
