
import CallToAction from "../call-to-action"
import Footer from "../footer"
import Navbar from "../navbar"


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
