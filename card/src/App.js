import './App.css';
import Card from './Components/Card/Card';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card nome='Sedans' />
        <Card nome='Suv' />
        <Card nome='Luxury' />
      </header>
    </div>
  );
}

export default App;
