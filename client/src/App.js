import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


import Main from './components/Main';
import Test from './components/pages/Test';
import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main /> }/>
        <Route path='/SignUpForm' element={<SignUpForm />}/>
        <Route path='/SignInForm' element={<SignInForm />}/>
        <Route path='/Test' element={<Test />}/>       
      </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
