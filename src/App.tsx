import React, { useState } from 'react';
import { Dashboard } from 'pages';
import { Header } from 'components/common';
import { FilterBox, FloatFilterBox } from 'components/Filter';

const App = () => {
  return (
    <div className="App">
      <Header />
      <FilterBox />
      <Dashboard />
      <FloatFilterBox />
    </div>
  );
};
export default App;
