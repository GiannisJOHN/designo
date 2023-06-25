
import Navbar from "../../components/navbar"

//all css files
import '../../css/css.js'

function App(props) {
  return (
    <>
      <main className="main-side-padding main-center">
        <Navbar />
        {props.children}
      </main>
    </>
  )
}

export default App
