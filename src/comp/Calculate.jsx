import './style.css'

// Calculate Mean
const calculateMean = (data) => {
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  const total = newData.reduce((acc, curr) => acc + curr, 0);
  return (total / data.length).toFixed(3);
};

// Calculate Median
const calculateMedian = (data) => {
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  const sortedData = newData.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return ((sortedData[mid - 1] + sortedData[mid]) / 2).toFixed(3);
  } else {
    return sortedData[mid].toFixed(3);
  }
};


// Calculate Mode
const calculateMode = (data) => {
  const winePropMap = {};
  let maxCount = 0;
  let modeValue;
  const newData = data.map((num) =>
    typeof num === "string" ? parseFloat(num) : num
  );
  // console.log(newData)
  newData.forEach((item) => {
    const winePropData = item;
    winePropMap[winePropData] = (winePropMap[winePropData] || 0) + 1;
    if (winePropMap[winePropData] > maxCount) {
      maxCount = winePropMap[winePropData];
      modeValue = winePropData;
    }
  });
  return modeValue.toFixed(3);
};

export default calculateMean
export {calculateMedian, calculateMode}

