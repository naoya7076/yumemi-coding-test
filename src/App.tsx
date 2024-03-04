import './App.css'
import { PrefsList } from './components/PrefsList'
import { PrefsPopulationChart } from './components/PrefsPopulationChart'
export const App:React.FC = () => {
  return (
    <>
      <PrefsList />
      <PrefsPopulationChart prefCodes={[1,2]} />
    </>
  )
}

export default App
