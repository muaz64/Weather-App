import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchWeather, setCity, clearHistory } from '../features/weatherSlice';
import { useState } from 'react';

const SearchHistory = () => {
  const history = useAppSelector((state) => state.weather.history);
  const dispatch = useAppDispatch();
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (city: string) => {
    dispatch(setCity(city));
    dispatch(fetchWeather(city));
  };

  const handleClear = () => {
    dispatch(clearHistory());
  };

  if (history.length === 0) return null;

  return (
    <div className="max-w-sm mx-auto mt-4">
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="text-xl font-bold mb-2"
      >
        {showHistory ? 'Hide History' : 'Show History'}
      </button>

      {showHistory && (
        <>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-white">Search History</h3>
            <button
              onClick={handleClear}
              className="text-sm text-red-500 hover:underline"
            >
              Clear
            </button>
          </div>
          <ul className="history">
            {history.map((city, index) => (
              <li
                key={index}
                onClick={() => handleClick(city)}
                className="cursor-pointer hover:bg-blue-400 p-2 rounded"
              >
                {city}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchHistory;
