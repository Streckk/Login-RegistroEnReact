import React from "react";

export const Home = ({ setPage }) => {
  return (
    <div className="relative h-screen flex flex-col">
    
      <div className="max-w-full h-1/2 flex lg:w-1/2 lg:h-2/3">
        <img
          src="src/assets/mobile-testing-52.svg"
          alt="Moving Forward"
          className="w-full h-96 object-contain lg:h-full"
        />
      </div>

      <div className="absolute top-2/4 flex flex-col items-center lg:top-1/4 lg:left-1/2 lg:w-1/2 xl:h-1/4 xl:justify-end">
        <h1 className="text-4xl font-bold text-center mb-4  lg:text-4xl">
          ¡Bienvenido a tu inicio de sesión!
        </h1>
        <p className="text-center text-sm mx-8 text-gray-400 sm:text-lg md:text-xl lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam
          ducimus nemo nulla voluptatum autem repellat adipisci animi magnam
          voluptatibus
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center lg:top-2/3">
        <button className="bg-black text-white w-4/5 h-12 rounded-2xl mb-4 font-semibold sm:w-3/5 md:w-2/3 lg:w-1/3"
                onClick={() => setPage("iniciar")}        >
          Login
        </button>
        <button className="bg-gray-400 text-black w-4/5 h-12 rounded-2xl font-semibold sm:w-3/5 md:w-2/3 lg:w-1/3"
                onClick={() => setPage("registrarse")}     >
          Register
        </button>
      </div>
    </div>
  );
};
