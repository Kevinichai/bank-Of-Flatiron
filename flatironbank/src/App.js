// import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    <h1>Transaction Details</h1>
    <input type='text' placeholder='search by description' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
    </div>
  );
}

export default App;
