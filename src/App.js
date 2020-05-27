import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NameFilter from './NameSort';
import babyData from './data/babyNamesData.json'

function App() {
  return (
<NameFilter nameInfo={babyData}/>
  );
}

export default App;
