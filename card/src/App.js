import './App.css';
import Card from './Components/Card/Card';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card nome='Sedans' img='/images/icon-sedans.svg' />
        <Card nome='Suv' img='/images/icon-suvs.svg' />
        <Card nome='Luxury' img='/images/icon-luxury.svg' />
      </header>
    </div>
  );
}

export default App;
