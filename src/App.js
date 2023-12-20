import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WebPages from './web/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<WebPages/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;