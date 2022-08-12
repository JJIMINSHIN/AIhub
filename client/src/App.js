import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> }/> 
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignUpForm' element={<SignUpForm />}/>
        <Route path='/SignInForm' element={<SignInForm />}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
