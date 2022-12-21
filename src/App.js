
import './App.css';
import ContactPage from './components/contactpage/ContactPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './components/signup/Signup';
import Login from './components/Login/Login';
import Protected_route from './components/Protected_routes/Protected_route';
import ContactProvider from './components/Context/ContactProvider';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={<Protected_route />}>
            <Route path='/contacts' element={
              <ContactProvider>
                <ContactPage />
              </ContactProvider>

            } />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
