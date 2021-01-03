import React from 'react';
import './App.css';
import SearchPhotos from "./searchPhotos"

function App() {
  return (
    <div className="App">
<div className="container">
        <h1 className="title">Unsplash</h1>
        <h4 className="name">Beautiful,free photos</h4>
        <h4 className="name">Gifted by the world's most generous community of photographers</h4>
        { <SearchPhotos /> }
      </div>
    </div>
  );
}

export default App;