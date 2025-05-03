import { useAppSelector } from "../app/hooks";

const WeatherCard = () => {
    const { data, loading, error } = useAppSelector((state) => state.weather);

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
    if (!data) return null;

    
  return (
    <div className="bg-white p-6 rounded shadow mt-6 text-center max-w-sm mx-auto">
        <h2 className="text-2xl font-bold"> {data.name}</h2>
        <p className="text-xl">{data.main.temp}°C</p>
        <p className="capitalize">{data.weather[0].description}</p>
        
        <div className="mt-2 text-sm text-gray-700">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
        <img
        className="mx-auto mt-4"
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />

    </div>
  )
}

export default WeatherCard