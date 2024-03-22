import React from "react";
import Image from "next/image";

const WeatherDetails = ({ data }: { data: any }) => {
  //   console.log(data);
  return (
    <div className="mb-4">
      <h2 className="text-2xl text-center mb-3">Weather in {data.name}</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 max-w-2xl mx-auto p-4 border border-dotted items-center border-neutral">
        <div className="md:w-1/2 max-w-[350px] pixelated border aspect-square bg-[url('https://cdn.sanity.io/images/cqs4spoy/production/fd9739d5720244c5feb4b45bba0ff8fed18b71ba-400x400.gif')]">
          <Image
            className="grayscale mix-blend-difference mx-auto mt-auto pixelated "
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="400"
            height="400"
          />
        </div>
        <div className=" flex flex-col items-center align-middle text-center w-full max-w-[350px] md:w-1/2 aspect-square border border-dashed pt-0 pb-2 px-4 hover:text-dark dark:hover:text-gray hover:bg-white dark:hover:bg-blacks transition-all ease-in-out duration-1000">
          <p className="text-[10rem] leading-[8rem] mt-8 ">
            {data.main.temp.toFixed(0)}&#176;
          </p>

          <p className="text-3xl text-center -mt-6">{data.weather[0].main}</p>
          <span className="flex items-center gap-4">
            <p className="text-sm">Feels Like:</p>
            <p className="text-6xl">{data.main.feels_like.toFixed(0)}&#176;</p>
          </span>

          <div className="flex w-full border-t border-dotted pt-8 md:pt-5">
            <div className="flex w-1/2 items-center justify-center gap-2 border-r border-dark/60 dark:border-gray/60">
              Humidity: <p className="text-2xl">{data.main.humidity}% </p>
            </div>
            <div className="flex w-1/2 items-center justify-center gap-2">
              Winds:
              <span className="flex text-2xl">
                {data.wind.speed.toFixed(0)}{" "}
                <p className="text-base mt-auto pl-1 pb-1">KmH</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
