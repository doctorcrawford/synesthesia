import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/synesthesia' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;