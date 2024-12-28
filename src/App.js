import { Route,Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Main from './components/Main';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/details' element={<NewsDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
