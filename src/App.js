import './App.css';
import { SearchBar } from './components/SearchBar';
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';



function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Home />
    </>
  );
}

export default App;
