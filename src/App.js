import React from 'react';
import Todos from './components/Todos';
import './components/css/style.css'
import './components/css/reset.css'

const App = () => {
  return (
    <div className="bg">
      <Todos />
    </div>
  );
};

export default App;