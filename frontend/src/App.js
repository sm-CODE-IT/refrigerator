import { useReducer } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Community from './pages/Community';
import Editor from './pages/IngredientEditor';
import Mypage from './pages/Mypage';
import RefrigeratorClose from './pages/RefrigeratorClose';
import RefrigeratorOpen from './pages/RefrigeratorOpen';


function App() {

  //const [data, dispatch] = useReducer(reducer, []);

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/close' element={<RefrigeratorClose />} />
          <Route path='/open' element={<RefrigeratorOpen />} />
          <Route path='/edit' element={<Editor />} />
          <Route path='/community' element={<Community />} />
          <Route path='/mypage' element={<Mypage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
