import logo from './logo.svg';
import './App.css';

import Blog from './components/Blog';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
 
function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s3">
            <Sidebar />
        </div>
        <div className="col s9">
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;
