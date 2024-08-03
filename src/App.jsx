
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'
function App() {

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        </div>
        <div className='pt-[100px]'>

        <Hero id="home" />
        <Skills id="skills" />
        <Projects id="project" />
      </div>
    </>
  )
}

export default App
