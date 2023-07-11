import './App.css';
import Card from './Components/Card/Card';

function App() {

  const espec = [
    {
      h1: 'Sedan',
      background: 'hsl(31, 77%, 52%)'
    },

    {
      h1: 'Suvs',
      background: 'hsl(184, 100%, 22%)'
    },

    {
      h1: 'Luxury',
      background: 'hsl(179, 100%, 13%)'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Card />
        <Card />
      </header>
    </div>
  );
}

export default App;
