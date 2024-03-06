import React, { useState } from 'react'
import './App.css'
import { PrefsList } from './components/PrefsList'
import { PrefsPopulationChart } from './components/PrefsPopulationChart'
import { SampleForm } from './components/SampleForm'
import { BlogTable } from './components/BlogTable'
import { UserProfileEditForm } from './components/UserProfileEditForm'
import { userProfile } from './data/user'
export const App:React.FC = () => {
  const [prefCodes, setPrefCodes] = useState<number[]>([]);
  return (
    <>
      <UserProfileEditForm {...userProfile} />
      <BlogTable/>
      <SampleForm />
      <PrefsList setPrefCodes={setPrefCodes}/>
      <div style={{ height: '300px' }}>
        {prefCodes.length > 0 && <PrefsPopulationChart prefCodes={prefCodes} />}
      </div>
    </>
  )
}

export default App
