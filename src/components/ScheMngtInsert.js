import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './ScheMngtInsert.scss';

const ScheMngtInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시키므로 기존 submit이벤트를 막아준다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="ScheMngtInsert" >
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default ScheMngtInsert;
