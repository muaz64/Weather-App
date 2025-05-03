import { useAppSelector } from "../app/hooks";

const WeatherCard = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
  if (!data) return null;

  const current = data.list[0]; // current forecast
  const cityName = data.city.name;
  const temperature = current.main.temp;
  const humidity = current.main.humidity;
  const windSpeed = current.wind.speed;
  const description = current.weather[0].description;
  const icon = current.weather[0].icon;

  return (
    <div className="bg-white p-6 rounded shadow mt-6 text-center text-black max-w-sm mx-auto">
      <h2 className="text-2xl font-bold">{cityName}</h2>
      <p className="text-xl">{temperature}°C</p>
      <p className="capitalize">{description}</p>

      <div className="mt-2 text-sm text-gray-700">
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>

      <img
        className="mx-auto mt-4"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
    </div>
  );
};

export default WeatherCard;
