import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  

  return (
  
      <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Weather App
      </h1>
      <SearchBar />
      </div>
      
  )
}

export default App
