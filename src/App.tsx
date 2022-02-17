import React from 'react';
import { Header, FloatBtn } from 'components/common';

const App = () => (
  <div className="App">
    <Header />
    <FloatBtn
      clickHandler={() => {
        console.log('open FilterBox');
      }}
    />
  </div>
);
export default App;
