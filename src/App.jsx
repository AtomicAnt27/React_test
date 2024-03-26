import './App.css'
import Card from './components/Card'
import Ditto from "./assets/images/Ditto.gif"

function App() {
  return (
    <>
      <Card
        title="Ditto"
        image={Ditto}
        text1="Mt foda"
      />
    </>
  )
}

export default App
