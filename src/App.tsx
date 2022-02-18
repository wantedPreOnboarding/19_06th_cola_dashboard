import React, { useState } from 'react';
import { Dashboard } from 'pages';
import { Header } from 'components/common';
import { FilterBox, FloatFilterBox } from 'components/Filter';

const App = () => {
  const [checkedInputs, setCheckedInputs] = useState<string[]>([]);
  const changeHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== id));
    }
  };
  return (
    <div className="App">
      <Header />
      <FilterBox id="2" changeHandler={changeHandler} checkedInputs={checkedInputs} />
      <Dashboard />
      <FloatFilterBox id="2" changeHandler={changeHandler} checkedInputs={checkedInputs} />
    </div>
  );
};
export default App;
