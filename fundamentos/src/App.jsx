// Importação CSS 
import './App.css'

// Importação Componentes
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MultComponent from './components/MultComponent'
import Events from './components/Events'

function App() {
  return (
    <div>
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MultComponent/>
      <Events/>
    </div>
  )
}

export default App
