import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <>
      <DarkModeToggle />
      <div className="min-h-screen p-4 transition-colors duration-500 mt-5">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        <SearchBar />
        <WeatherCard />
        <SearchHistory />
      </div>
    </>
  );
}

export default App;
