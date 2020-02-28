import React from 'react';
import './App.css';
import DataSourceForm from './components/dataSourceForm';
import ItemList from './components/itemList';
import ColorList from './components/colorList';

function App() {
  return (
    <div className="App">
     
      <DataSourceForm/>
      <ItemList />
      <ColorList/>
    </div>
  );
}

export default App;
