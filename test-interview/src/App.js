import ControlledCarousel from './components/carousel';
import './App.css';
import Texts from '../src/components/Text'
import { ButtonPrimary } from '../src/components/ButtonPrimary'

function App() {
  return (
    <div className="App">
      <div className="Carousel">
        <ControlledCarousel />
      </div>
      <div className="Text">
        <h1>Fusce ultrices non tortor</h1>
        <Texts/>
        <div className="Buttons"> 

        <ButtonPrimary label="Contato"/>
        <ButtonPrimary label="Saber Mais"/>
        <ButtonPrimary label="Salvar Publicação"/>
        </div>
      </div>
      <div className="Text">
        <h1>Fusce ultrices non tortor</h1>
        <Texts/>
      </div>
    </div>
  );
}

export default App;
