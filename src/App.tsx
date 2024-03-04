import React, { useState } from 'react'
import './App.css'
import { PrefsList } from './components/PrefsList'
import { PrefsPopulationChart } from './components/PrefsPopulationChart'
export const App:React.FC = () => {
  const [prefCodes, setPrefCodes] = useState<number[]>([]);
  return (
    <>
      <PrefsList setPrefCodes={setPrefCodes}/>
      <div style={{ height: '300px' }}>
        {prefCodes.length > 0 && <PrefsPopulationChart prefCodes={prefCodes} />}
      </div>
    </>
  )
}

export default App
