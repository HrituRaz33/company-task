import React from "react";

const RoundTrip = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center h-64 w-11/12 mx-auto bg-gray-100 shadow-2xl border-2 border-slate-200 border-solid rounded p-8">
        <div className="bg-gray-100 p-4 w-64 h-full border-2 border-slate-200 border-solid ">
          <h2>From</h2>
          <p className="text-4xl font-bold">Pune</p>
          <p>PNQ, Pune Airport India</p>
        </div>
        <div className="bg-gray-300 p-4 w-64 h-full border-2 border-slate-200 border-solid ">
          <h2>To</h2>
          <p className="text-4xl font-bold">Bangkok</p>
          <p>BKK, Bangkok Thailand</p>
        </div>
        <div className="bg-gray-100 p-4 w-64 h-full border-2 border-slate-200 border-solid ">
          <h2>Departure</h2>
          <p>
            <span className="text-4xl font-bold">12</span>{" "}
            <span className="text-2xl">May'23</span>
          </p>
          <p>Friday</p>
        </div>
        <div className="bg-gray-100 p-4  w-64 h-full border-2 border-slate-200 border-solid ">
          <h2>Return</h2>
          <p>
            <span className="text-4xl font-bold">12</span>{" "}
            <span className="text-2xl">May'23</span>
          </p>
          <p>Friday</p>
        </div>
        <div className="bg-gray-100 p-4  w-64 h-full border-2 border-slate-200 border-solid ">
          <h2>Travellers & Class</h2>
          <p>
            <span className="text-4xl font-bold">8</span>
            <span className="text-2xl">Travellers</span>
          </p>
          <p>Business</p>
        </div>
      </div>
    </div>
  );
};

export default RoundTrip;
