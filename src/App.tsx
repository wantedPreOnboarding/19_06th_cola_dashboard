import React, { useEffect } from 'react';
import { Dashboard } from 'pages';
import { Header } from 'components/common';

const App = () => {
  return (
    <div className="App" style={{ width: 'fit-content' }}>
      <Header />
      <Dashboard />
    </div>
  );
};
export default App;
