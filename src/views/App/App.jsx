
import CallToAction from "../../components/call-to-action"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

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
