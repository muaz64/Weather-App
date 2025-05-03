import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchWeather, setCity, clearHistory } from '../features/weatherSlice';

const SearchHistory = () => {
  const history = useAppSelector((state) => state.weather.history);
  const dispatch = useAppDispatch();

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
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">Search History</h3>
        <button
          onClick={handleClear}
          className="text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      </div>
      <ul className="bg-white rounded shadow p-3">
        {history.map((city, index) => (
          <li
            key={index}
            onClick={() => handleClick(city)}
            className="cursor-pointer hover:bg-blue-100 p-2 rounded"
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
