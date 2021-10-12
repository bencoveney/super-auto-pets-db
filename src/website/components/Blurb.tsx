import React from "react";

export function Blurb() {
  return (
    <div className="grid grid-cols-2 gap-4 m-4 justify-items-stretch">
      <div className="bg-white rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium text-black">About this site</h2>
        <p className="text-gray-500 mt-2">
          This is an un-official guide and reference for the game Super Auto
          Pets.
        </p>
        <p className="text-gray-500 mt-2">
          If you find any issues or would like to make a contribution, please
          raise an issue in the{" "}
          <a
            className="text-blue-600 visited:text-purple-600 underline"
            href="https://github.com/bencoveney/super-auto-pets-db"
          >
            Github Repository
          </a>
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium text-black">API</h2>
        <p className="text-gray-500 mt-2">
          The data used to power this site can be read/consumed from{" "}
          <a
            className="text-blue-600 visited:text-purple-600 underline"
            href="./api.json"
          >
            api.json
          </a>
          .
        </p>
      </div>
    </div>
  );
}
