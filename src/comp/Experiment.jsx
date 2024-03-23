import React, { useState, useEffect } from 'react';
import data from '../Wine-Data.json';
import calculateMean, {calculateMedian, calculateMode} from './Calculate'

const CalculateGamma = () => {
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    const updatedData = calculateGammaForData(data);
    setUpdatedData(updatedData);
  }, []);

  const calculateGammaForData = (data) => {
    return data.map(item => {
      const { Ash, Hue, Magnesium } = item;
      const Gamma = (Ash * Hue) / Magnesium;
      return { ...item, Gamma };
    });
  };
  console.log("updatedData",updatedData)

  return (
    <GammaTable updatedData={updatedData}/>

  );
};

export {CalculateGamma}



const GammaTable = ({updatedData}) => {
   
    console.log("updatedData",updatedData)
    const alcoholStats = [];

    // Group wine data by alcohol class
    const alcoholClasses = new Map();

    updatedData && updatedData.forEach(item => {
      const alcoholClass = item.Alcohol;
      if (!alcoholClasses.has(alcoholClass)) {
        alcoholClasses.set(alcoholClass, []);
      }
      alcoholClasses.get(alcoholClass).push(item);
    });
  
    // Calculate statistics for each alcohol class and add them to alcoholStats array
    alcoholClasses.forEach((alcoholData, alcoholClass) => {
      const mean = calculateMean(alcoholData.map(item => item.Gamma));
      const median = calculateMedian(alcoholData.map(item => item.Gamma));
      const mode = calculateMode(alcoholData.map(item => item.Gamma));
  
      alcoholStats.push({
        alcoholClass,
        mean,
        median,
        mode
      });
    });
    

  // Initialize an array to store the data matrix
  const dataMatrix = [
    ['Gamma Mean', ...alcoholStats.map(stat => stat.mean)],
    ['Gamma Median', ...alcoholStats.map(stat => stat.median)],
    ['Gamma Mode', ...alcoholStats.map(stat => stat.mode)]
  ];

  return (
    <div className="table-container">
      <h2>Wine Stats</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Measure</th>
            {/* Loop to create three additional heading for each Alcohol class */}
            {alcoholStats.map(stat => (
              <th key={stat.alcoholClass}>Alcohol Class {stat.alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Loop to fill table data */}
          {dataMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GammaTable;

