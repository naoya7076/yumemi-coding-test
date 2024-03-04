import React, { useState } from 'react'
import './App.css'
import { PrefsList } from './components/PrefsList'
import { PrefsPopulationChart } from './components/PrefsPopulationChart'
export const App:React.FC = () => {
  const [prefCodes, setPrefCodes] = useState<number[]>([]);
  return (
    <>
      <PrefsList setPrefCodes={setPrefCodes}/>
      <PrefsPopulationChart prefCodes={prefCodes} />
    </>
  )
}

export default App
