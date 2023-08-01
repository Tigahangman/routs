import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';

function App() {

  const location = useLocation()

  console.log(location);


  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
