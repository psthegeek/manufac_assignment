import React from 'react'
import wineData from '../Wine-Data.json' 
import WineStatisticsTable from './WineStatisticsTable'
// import CalculateGamma from '../comp/Experiment'
import GammaTable from '../comp/Experiment'

const Analytic = () => {
    

  return (
    <>
            <WineStatisticsTable wineData={wineData}/>
            <GammaTable/>
            {/* <CalculateGamma/> */}
    </>
  )
}

export default Analytic
