import React, { useState } from "react";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";

const Flight = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isBold1, setIsBold1] = useState(false);
  const [isBold2, setIsBold2] = useState(false);
  const [activeButton, setActiveButton] = useState("one");
  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
    setIsBold1(!isBold1);
    setIsChecked2(false);
    setIsBold2(!false);
    setActiveButton("one");
  };
  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
    setIsBold2(!isBold2);
    setIsChecked1(false);
    setIsBold1(false);
    setActiveButton("two");
  };

  return (
    <div className="bg-white shadow-2xl">
      <div>
        <div className="flex justyfy-start items-center  w-11/12 mx-auto ">
          <div className="bg-white">
            <div className="p-20">
              <label className="inline-flex items-center mt-3 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  checked={isChecked1}
                  onChange={handleCheckbox1Change}
                />
                <span
                  className={`ml-2 text-gray-700 ${isBold1 ? "font-bold" : ""}`}
                >
                  One Way
                </span>
              </label>
              <label className="inline-flex items-center mt-3 ml-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  checked={isChecked2}
                  onChange={handleCheckbox2Change}
                />
                <span
                  className={`ml-2 text-gray-700 ${isBold2 ? "font-bold" : ""}`}
                >
                  Round Trip
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Randering components */}
        {activeButton === "one" && <OneWay />}
        {activeButton === "two" && <RoundTrip />}
      </div>
    </div>
  );
};

export default Flight;
