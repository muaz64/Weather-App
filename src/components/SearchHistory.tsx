import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchWeather, setCity } from '../features/weatherSlice';


const SearchHistory = () => {
    const history =useAppSelector((state)=> state.weather.history);
    const dispatch = useAppDispatch();

    const handleClick = (city: string) =>{
        dispatch(setCity(city));
        dispatch(fetchWeather(city));  
    }

  return (
    <div className="max-w-sm mx-auto mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Search History</h3>
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
  )
}

export default SearchHistory