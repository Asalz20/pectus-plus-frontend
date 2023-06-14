import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSlider = () => {
  const [range, setRange] = useState([0, 5000]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  useEffect(() => {
    // Fetch products within the range here
    console.log("Range Changed");

    // Clean up the effect if necessary
    return () => {
      // Cleanup code here
      console.log("Cleanup");
    };
  }, [range]);

  // getting unsafe_componentWillMount in console. Eventually a useEffect will be used to fetch products that are within the range.
  return (
    <div className="flex flex-col m-auto w-3/4">
      <Slider
        range
        min={0}
        max={5000}
        step={1}
        allowCross={false}
        value={range}
        onChange={handleRangeChange}
      />
      <div className="flex justify-between">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
