import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SignUpForm from "./user/SignUpForm";
import SingInForm from "./user/SignInForm";


function App() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/login' element={< SingInForm/>} />
          <Route path='/signup' element={< SignUpForm/>} />
        </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;