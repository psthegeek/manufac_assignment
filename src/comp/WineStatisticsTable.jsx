import React from "react";
import './style.css'
import calculateMean, {calculateMedian, calculateMode} from './Calculate'

const WineStatisticsTable = ({wineData}) => {

    const alcoholStats = [];

    // Group wine data by alcohol class
    const alcoholClasses = new Map();
    wineData.forEach(item => {
      const alcoholClass = item.Alcohol;
      if (!alcoholClasses.has(alcoholClass)) {
        alcoholClasses.set(alcoholClass, []);
      }
      alcoholClasses.get(alcoholClass).push(item);
    });
  
    // Calculate statistics for each alcohol class and add them to alcoholStats array
    alcoholClasses.forEach((alcoholData, alcoholClass) => {
      const mean = calculateMean(alcoholData.map(item => item.Flavanoids));
      const median = calculateMedian(alcoholData.map(item => item.Flavanoids));
      const mode = calculateMode(alcoholData.map(item => item.Flavanoids));
  
      alcoholStats.push({
        alcoholClass,
        mean,
        median,
        mode
      });
    });
  // Initialize an array to store the data matrix
  const dataMatrix = [
    ['Flavonoid Mean', ...alcoholStats.map(stat => stat.mean)],
    ['Flavonoid Median', ...alcoholStats.map(stat => stat.median)],
    ['Flavonoid Mode', ...alcoholStats.map(stat => stat.mode)]
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

export default WineStatisticsTable;
