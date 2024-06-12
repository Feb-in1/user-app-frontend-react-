import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
