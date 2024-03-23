import React from 'react'
import wineData from '../Wine-Data.json' 
import WineStatisticsTable from './WineStatisticsTable'
// import CalculateGamma from '../comp/Experiment'
import CalculateGamma from './calculateGamma'

const Analytic = () => {
    

  return (
    <>
            <WineStatisticsTable wineData={wineData}/>
            <CalculateGamma/>
    </>
  )
}

export default Analytic
