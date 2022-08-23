import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Main from './components/Main';

import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';
import Test from './components/pages/Test';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main /> }/> 
        <Route path='/futureHubby' element={<Test/>}/>
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/login' element={<SignInForm />}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
