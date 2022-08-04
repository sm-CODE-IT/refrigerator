import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import RefrigeratorClose from './pages/RefrigeratorClose';
import RefrigeratorOpen from './pages/RefrigeratorOpen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/close' element={<RefrigeratorClose />} />
          <Route path='/open' element={<RefrigeratorOpen />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
