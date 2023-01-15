import React from 'react'
import './featureBoard.css'
import { FiRefreshCw ,FiLock,FiThumbsUp} from "react-icons/fi";
import {TfiRocket} from "react-icons/tfi";
const features = [
    {
        featureIcon: <TfiRocket/>,
        featureDetail:'FREE SHIPING',
        featureQuality: 'Orders over $100'
    },
    {
        featureIcon: <FiRefreshCw/>,
        featureDetail:'FREE RETURN',
        featureQuality: 'Within 30 days returns'
    },
    {
        featureIcon: <FiLock/>,
        featureDetail:'SUCURE PAYMENT',
        featureQuality: 'Orders over $100'
    },
    {
        featureIcon: <FiThumbsUp/>,
        featureDetail:'BEST PEICE',
        featureQuality: 'Guaranteed price'
    },

]
function FeatureBoard() {
  return (
    <>
      <div className="feacture-board">
      {features.map((feature)=>(
                       <div className="feature-detail">
                       <div className="feature-icon">{feature.featureIcon}</div>
                       <div className="feature-desc">
                            <p className="feature-title">{feature.featureDetail}</p>
                              <p className="feature-quality">{feature.featureQuality}</p>
                       </div>
                       </div> 
                ))}

      </div>
    </>
  )
}

export default FeatureBoard
