import axios from "axios";
import { useState } from "react";
import WeatherDetails from "../Weather/WeatherDetails";
import LoadingSimple from "../Loading/LoadingSimple";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
}

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData>({} as WeatherData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_SANITY_WEATHER_KEY}`;

  const fetchWeather = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined); // Clear any previous errors

    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setWeather(response.data);
        } else {
          setError(
            "Sorry, We CouldnU+2019t Locate the City. Please Verify the Name and Retry."
          );
        }
      })
      .catch((error) => {
        // setError("City Not Found. Double-Check the Spelling and Try Again.");
        setError(
          "Sorry, We CouldnU+2019t Locate the City. Please Verify the Name and Retry."
        );
      })
      .finally(() => {
        setLoading(false);
      });

    setCity("");
  };

  const isButtonDisabled = !city.trim();

  if (loading) {
    return <LoadingSimple />;
  } else {
    return (
      <div>
        {/* Search */}
        <form
          onSubmit={fetchWeather}
          className="relative flex justify-between items-center max-w-[500px] w-full m-auto mt-10 z-10"
        >
          <div className="flex justify-between items-center w-full m-auto border">
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-b focus:outline-none"
              type="text"
              placeholder="Search city"
            />
          </div>
        </form>

        <button
          className="border p-4"
          onClick={fetchWeather}
          disabled={isButtonDisabled}
        >
          Fetch Data
        </button>

        {/* Display error message */}
        {error && <div className="error text-red-600">{error}</div>}

        {/* Weather */}
        {weather.main && <WeatherDetails data={weather} />}
      </div>
    );
  }
};

export default Weather;