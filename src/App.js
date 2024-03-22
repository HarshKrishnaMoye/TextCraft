import './App.css'
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  return (
  <> 
    <Navbar title="TextCraft" home="Home" about="About"/>
    {/* <div className="container my-5">
    <TextForm heading ="Enter The Text That You Want To Analyze"/>
    </div> */}

    <div className="container my-5">
      <About/>
    </div>
    </>
  );
}

export default App;
