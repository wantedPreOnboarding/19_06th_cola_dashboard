import React from 'react';
import { Header } from 'components/common';
import { FilterBox, FloatFilterBox } from 'components/filter';

const App = () => (
  <div className="App">
    <Header />
    <FilterBox />
    <FloatFilterBox />
  </div>
);
export default App;
