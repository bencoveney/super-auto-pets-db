import React from "react";

export function Blurb() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 justify-items-stretch">
      <div className="bg-gray-900 rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium">About this site</h2>
        <p className="mt-2">
          This database website is an un-official guide and reference for the
          pets, food and stats from the game Super Auto Pets.
        </p>
        <p className="mt-2">
          If you find any issues or would like to make a contribution, please
          raise an issue in the{" "}
          <a
            className="text-blue-300 visited:text-purple-300 underline"
            href="https://github.com/bencoveney/super-auto-pets-db"
          >
            Github Repository
          </a>
        </p>
      </div>
      <div className="bg-gray-900 rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium">API</h2>
        <p className="mt-2">
          The data used to power this site can be read/consumed from{" "}
          <a className="text-blue-300 visited:text-purple-300 underline" href="./api.json">
            api.json
          </a>
          .
        </p>
      </div>
    </div>
  );
}
