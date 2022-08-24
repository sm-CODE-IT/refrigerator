import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Join from './component/Join';
import Login from './component/login';
import Community from './pages/Community';
import Editor from './pages/IngredientEditor';
import Mypage from './pages/Mypage';
import RefrigeratorClose from './pages/RefrigeratorClose';
import RefrigeratorOpen from './pages/RefrigeratorOpen';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const reducer = (state, action) => { //모든 데이터 수정
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        (it.id === action.data.id) ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem('ingredient', JSON.stringify(newState)); //로컬스토리지에  newState 저장
  return newState;
};

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  const onCreate = (inName, date, amount) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        inName,
        date,
        amount,
      }
    });
    dataId.current++;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  return (
    < DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onRemove
        }}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/close' element={<RefrigeratorClose />} />
                <Route path='/open' element={<RefrigeratorOpen />} />
                <Route path='/edit' element={<Editor />} />
                <Route path='/community' element={<Community />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/join' element={<Join />} />
              </Routes>
            </div>
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    

  );
}

export default App;
