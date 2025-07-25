import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Search from './components/search-bar/SearchBar';
import MainContent from './components/main-content/MainContent';
import Produces from './components/Produces/Produces';


function App(){
  return(
    <div>
      <Header />
      <Search />
      <MainContent />
      <Produces />
    </div>
  );
}

export default App;