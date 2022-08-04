import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SignUpForm from "./user/SignUpForm";
import SingInForm from "./user/SignInForm";
import List from "./List";
import MyAccount from "./MyAccount";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user/login' element={< SingInForm />} />
          <Route path='/user/signup' element={< SignUpForm />} />
          <Route path='/list' element={< List />} />
          <Route path='/myaccount' element={< MyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;