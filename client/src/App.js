import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


import Login from "./Login";
import Main from "./Main";


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main /> }/> 
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
