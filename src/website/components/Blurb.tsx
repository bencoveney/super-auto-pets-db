import React from "react";

export function Blurb() {
  return (
    <div className="grid grid-cols-2 gap-4 m-4 justify-items-stretch">
      <div className="bg-white rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium text-black">About this site</h2>
        <p className="text-gray-500">
          This is an un-official guide and reference for the game Super Auto
          Pets.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-3">
        <h2 className="text-xl font-medium text-black">API</h2>
        <p className="text-gray-500">
          The data used to power this site can be read/consumed from `api.json`.
          It would be a good idea to use best practices such as caching this
          data when using it.
        </p>
      </div>
    </div>
  );
}
