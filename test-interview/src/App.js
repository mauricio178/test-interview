import ControlledCarousel from './components/Carousel';
import './App.css';
import Texts from '../src/components/Text'
import { ButtonPrimary } from '../src/components/ButtonPrimary'
import Header from '../src/components/Header'
import CardContact from '../src/components/Card'
import Formulario from '../src/components/Form'
import Footer from '../src/components/Footer'

function App() {
  return (
    <>
      <div className="Header">
        <Header/>
      </div>
      <div className="App">
        <div className="Carousel">
          <ControlledCarousel />
        </div>
        <div className="Cards">
          <CardContact />
        </div>
        <div className="Text ">
          <h1>Fusce ultrices non tortor</h1>
          <Texts />
        </div>
        <div className="Form">
          <Formulario/>
        </div>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </>
  );
}

export default App;
