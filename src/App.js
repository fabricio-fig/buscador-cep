import {FiSearch} from 'react-icons/fi';
import './style.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">

          <input type="text" placeholder="Digite seu cep..." />
        
          <button className="buttonSearch">
            <FiSearch size={25} color="#FFF"/>
          </button>

      </div>
      <main className="main">
          <h2>CEP: 790322200</h2>
        <span>Rua Teste</span>
        <span>Complemento: Algum Complemento</span>
        <span>Vila Rosa</span>
        <span>Natal - RN</span>
      </main>

    </div>
  );
}

export default App;
