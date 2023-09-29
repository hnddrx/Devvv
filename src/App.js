
//*Import react-router
import { Route, Routes } from 'react-router';
//*Pages
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
//chess
import Chess from './components/PlayRandomEngine'

import Chat from './components/Chat';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about_me' element={<AboutMe />} />
        <Route path='/chess' element={<Chess />} />
      </Routes>
      <Chat />
    
    </div>
  );
}

export default App;

