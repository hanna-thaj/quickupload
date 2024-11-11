import React from 'react';
import './App.css';
import UploadForm from './components/UploadForm/UploadForm';
import StoreCards from './components/StoreCards/StoreCards';

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center my-4 text-light">
        <span className="black">Q</span>
        <span className="grey">u</span>
        <span className="white">i</span>
        <span className="black">c</span>
        <span className="grey">k</span>
        <span className="white">U</span>
        <span className="black">p</span>
        <span className="grey">l</span>
        <span className="white">o</span>
        <span className="black">a</span>
        <span className="grey">d</span>
      </h1>
      <StoreCards />
      <UploadForm />
    </div>
  );
}

export default App;
