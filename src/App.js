import logo from './logo.svg';
import './App.css';
import ScheMngtTemplate from './components/ScheMngtTemplate';
import ScheMngtInsert from './components/ScheMngtInsert';
import ScheMngtList from './components/ScheMngtList';
import { useReducer, useRef, useCallback } from 'react';

function createBulkSche() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function scheduleReducer(sche, action) {
  switch (action.type) {
    case 'INSERT':
      return sche.concat(action.sche);
    case 'REMOVE':
      return sche.filter((sche) => sche.id !== action.id);
    case 'TOGGLE':
      return sche.map((sche) =>
        sche.id === action.id ? { ...sche, checked: !sche.checked } : sche,
      );
    default:
      return sche;
  }
}

const App = () => {
  const [schedules, dispatch] = useReducer(
    scheduleReducer,
    undefined,  // 두번째 파라미터에 undefined로 셋팅하면 컴포넌트가 처음렌더링 될때만 createBulkSche를 호출한다.
    createBulkSche,     // 원래는 두번째 파라미터에 createBulkSche를 넣어 줘야 한다.
  );

  // 고유 id 값
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const sche = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', sche });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <ScheMngtTemplate>
      <ScheMngtInsert onInsert={onInsert} />
      <ScheMngtList
        schedules={schedules}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </ScheMngtTemplate>
  );
};

export default App;
