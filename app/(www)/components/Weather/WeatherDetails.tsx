import React from "react";
import Image from "next/image";

const WeatherDetails = ({ data }: { data: any }) => {
  //   console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px]">
      <div>
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p>{data.weather[0].main}</p>
        </div>
        <p>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* bottom */}
      <p>Weather in {data.name}</p>
      <div>
        <div>
          <p>Feels Like {data.main.feels_like.toFixed(0)}&#176;</p>
        </div>
        <div>
          <p>Humidity {data.main.humidity}%</p>
        </div>
        <div>
          <p>Winds {data.wind.speed.toFixed(0)} KmH</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
