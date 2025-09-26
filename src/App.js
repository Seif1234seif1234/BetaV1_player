import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index_page from './page_index'
import Room from './webs/Room'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Index_page /> }></Route>
        <Route path="/room/:code" element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
