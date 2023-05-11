import React, { useState } from "react";

const OneWay = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleClick = (content) => {
    console.log(content);
    setShowPopup(true);
    setPopupContent(content);
    setShowPopup(false);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center h-64 w-11/12 mx-auto  border-2 border-slate-200 border-solid rounded p-8">
        <div
          onClick={() => handleClick("Div 1 content")}
          className="bg-gray-100 p-4 w-64 h-full border-2 border-slate-200 border-solid "
        >
          <h2>From</h2>
          <p className="text-4xl font-bold">Pune</p>
          <p>PNQ, Pune Airport India</p>
          {popupContent}
        </div>
        <div
          onClick={() => handleClick("Div 2 content")}
          className="bg-gray-300 p-4 w-64 h-full border-2 border-slate-200 border-solid "
        >
          <h2>To</h2>
          <p className="text-4xl font-bold">Bangkok</p>
          <p>BKK, Bangkok Thailand</p>
          {popupContent}
        </div>
        <div
          onClick={() => handleClick("Div 3 content")}
          className="bg-gray-100 p-4 w-64 h-full border-2 border-slate-200 border-solid "
        >
          <h2>Departure</h2>
          <p>
            <span className="text-4xl font-bold">12</span>{" "}
            <span className="text-2xl">May'23</span>
          </p>
          <p>Friday</p>
        </div>
        <div
          onClick={() => handleClick("Div 4 content")}
          className="bg-gray-100 p-4  w-64 h-full border-2 border-slate-200 border-solid "
        >
          <h2>Return</h2>
          <p>
            <span className="text-4xl font-bold">12</span>{" "}
            <span className="text-2xl">May'23</span>
          </p>
          <p>Friday</p>
        </div>
        <div
          onClick={() => handleClick("Div 5 content")}
          className="bg-gray-100 p-4  w-64 h-full border-2 border-slate-200 border-solid "
        >
          <h2>Travellers & Class</h2>
          <p>
            <span className="text-4xl font-bold">10</span>
            <span className="text-2xl">Travellers</span>
          </p>
          <p>Business</p>
        </div>
      </div>
    </div>
  );
};

export default OneWay;
