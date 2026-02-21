import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Guide from "../components/Guide"
import Stats from "../components/Stats"
import Avis from "../components/Avis"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pageOffset-nvt">
        {/* tout ton contenu ici */}
        
      <Header />
      <Guide />
      <Stats />
      <Avis />
      <Contact />
      <Gallery />
      <About />
      <Footer />
      </main>
    </>
  )
}