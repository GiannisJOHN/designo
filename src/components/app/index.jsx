
import CallToAction from "../call-to-action"
import Footer from "../footer"
import Navbar from "../navbar"

//all css files
import '../../css/css.js'

function App(props) {
  return (
    <>
      <main className="main-center">
        <Navbar />
          {props.children}
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default App
