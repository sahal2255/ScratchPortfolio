
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import './App.css'
import ReactMini from './components/projects/ReactMini'
function App() {

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        </div>
        <div className='pt-[100px]'>

        <Hero id="home" />
        <Skills id="skills" />
        <ReactMini/>
      </div>
    </>
  )
}

export default App
