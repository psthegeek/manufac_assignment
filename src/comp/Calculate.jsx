import React from 'react';
import './viewData.css'


const calculateMean = (data) => {
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  const total = newData.reduce((acc, curr) => acc + curr, 0);
  return (total / data.length).toFixed(3);
};

const calculateMedian = (data) => {
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  const sortedFlavanoids = newData.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedFlavanoids.length / 2);
  if (sortedFlavanoids.length % 2 === 0) {
    return ((sortedFlavanoids[mid - 1] + sortedFlavanoids[mid]) / 2).toFixed(3);
  } else {
    return sortedFlavanoids[mid];
  }
};

const calculateMode = (data) => {
  const flavanoidsMap = {};
  let maxCount = 0;
  let modeValue;
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  // console.log(newData)
  newData.forEach((item) => {
    const flavanoids = item;
    flavanoidsMap[flavanoids] = (flavanoidsMap[flavanoids] || 0) + 1;
    if (flavanoidsMap[flavanoids] > maxCount) {
      maxCount = flavanoidsMap[flavanoids];
      modeValue = flavanoids;
    }
  });
  return modeValue;
};

export default calculateMean
export {calculateMedian, calculateMode}

