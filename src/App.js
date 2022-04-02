import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import ComposeMail from './components/ComposeMail';

function App() {

  return (
    <div className='App'>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
          <ComposeMail />
          </div>
    </div>
  );
}

export default App;
