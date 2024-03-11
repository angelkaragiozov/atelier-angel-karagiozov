import React from "react";
import Image from "next/image";

const WeatherDetails = ({ data }: { data: any }) => {
  //   console.log(data);
  return (
    <div>
      <h2 className="text-2xl text-center">Weather in {data.name}</h2>
      <div className="relative flex flex-col justify-between w-full">
        <div className="flex flex-row border border-dotted justify-center items-center border-neutral">
          <div className="flex flex-col">
            <div className="border bg-[url('https://cdn.sanity.io/images/cqs4spoy/production/fd9739d5720244c5feb4b45bba0ff8fed18b71ba-400x400.gif')]">
              <Image
                className="mix-blend-difference"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="/"
                width="200"
                height="200"
              />
            </div>
            <p className="text-3xl text-center">{data.weather[0].main}</p>
          </div>
          <div className="text-center">
            <h1 className="text-[10rem] text-center">
              {data.main.temp.toFixed(0)}&#176;
            </h1>
          </div>
        </div>

        <div className="text-base text-center">
          <div>
            <span>
              Feels Like:{" "}
              <p className="text-2xl">
                {data.main.feels_like.toFixed(0)}&#176;
              </p>
            </span>
          </div>
          <div>
            <span>
              Humidity: <p className="text-2xl">{data.main.humidity}% </p>
            </span>
          </div>
          <div>
            <span>
              Winds:{" "}
              <p className="text-2xl">{data.wind.speed.toFixed(0)} KmH</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
