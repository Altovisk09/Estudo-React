// Importação CSS 
import './App.css'

// Importação Componentes
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MultComponent from './components/MultComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <div>
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MultComponent/>
      <Events/>
      <Challenge/>
    </div>
  )
}

export default App
