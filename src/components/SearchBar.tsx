import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchWeather, setCity } from '../features/weatherSlice';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (input.trim()) {
      dispatch(setCity(input));
      dispatch(fetchWeather(input));
    }
  };

  return (
    <div className="flex gap-2 justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city"
        className="border rounded p-2 w-64 bg-white text-black placeholder-gray-700"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
