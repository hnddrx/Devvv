
//*Import react-router
import { Route, Routes } from 'react-router';
//*Pages
import Homepage from './pages/Homepage';

//chess
import Chess from './components/PlayRandomEngine'

import Chat from './components/Chat';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/chess' element={<Chess />} />
      </Routes>
      <Chat />
    
    </div>
  );
}

export default App;

