import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Auth from './components/auth/index.tsx';


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
          path="/"
          element={<Auth/>}
          />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;