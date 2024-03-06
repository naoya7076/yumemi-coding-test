import React, { useState } from 'react'
import './App.css'
import { PrefsList } from './components/PrefsList'
import { PrefsPopulationChart } from './components/PrefsPopulationChart'
import { SampleForm } from './components/SampleForm'
import { BlogTable } from './components/BlogTable'
import { UserProfileEditForm } from './components/UserProfileEditForm'
export const App:React.FC = () => {
  const [prefCodes, setPrefCodes] = useState<number[]>([]);
  const userProfile = {
    userName: {
      defaultValue: 'hoge',
      onChange: () => {}
    },
    mailAddress: {
      defaultValue: 'hoge@google.com',
      onChange: () => {}
    },
    language: {
      defaultValue: 'ja',
      onChange: () => {}
    },
    photoUrl: {
      defaultValue: 'https://example.com/hoge.png',
      onChange: () => {}
    }
  }
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
