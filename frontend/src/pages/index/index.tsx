// Importações necessárias...
import './index.css';
import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

interface Fornecedor {
  nome: string;
  logo: string;
}

const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none',
    width: '50%',
    height: '30vw',
    margin: 'auto',
    marginTop: '10vh',
    borderRadius: '2vw',
    position: 'unset',
    padding: 'unset',
  },
};

export function Index() {
  const [consumo, setConsumo] = useState<string>('');
  const [resultados, setResultados] = useState<Fornecedor[]>([]);
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const handleCalcularMelhoresFornecedores = async () => {
    const consumoNumber = Number(consumo);
    if (isNaN(consumoNumber) || consumoNumber <= 0) {
      alert('Por favor, insira um valor válido maior que zero no campo.');
      return;
    }
  
    if (consumoNumber > 60000) {
      alert('Nenhum fornecedor disponível para consumo maior que 60000kWh.');
      return;
    }
  
    try {
      const response = await axios.post<{ melhores_fornecedores: Fornecedor[] }>(
        'http://127.0.0.1:5000/calcular-melhores-fornecedores',
        { consumo: consumoNumber }
      );
  
      setResultados(response.data.melhores_fornecedores);
      setModalAberto(true);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <main className='corpo'>
      <div className='leftframe'>
        <h2 className='tituloEsquerda'>
          Não jogue dinheiro fora!<br />Encontre o melhor<br />fornecedor para as<br />suas necessidades.
        </h2>
        <img src="src\images\Wind turbine-bro.png" className='eolica'/>
      </div>
      <div className='rightframe'>
        <div className='inputBox'>
          <h2 className='titulo'>
            Preencha o campo para achar<br />o melhor fornecedor.
          </h2>

          <h2 className='subtitulo'>
            Qual é o consumo mensal de energia<br />da sua empresa?
          </h2>

          <input
            className='entrada'
            placeholder='Digite aqui.'
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
          />
          <button className='calcular' onClick={handleCalcularMelhoresFornecedores}>
            Calcular
          </button>
        </div>
      </div>
      <Modal isOpen={modalAberto} onRequestClose={fecharModal} style={customStyles}>
        <h2 className='tituloModal'>Fornecedores Indicados: 
        </h2>
        <div className='fornecedores'>
          {resultados.map((fornecedor) => (
            <div key={fornecedor.nome} className='caixaFornecedores'>
              <div className='nomeFornecedor'>
                {fornecedor.nome}
              </div> 
              <img 
                src={`http://127.0.0.1:5000/${fornecedor.logo}`} 
                alt={fornecedor.nome} 
                className='logoFornecedor'/>
            </div>
          ))}
        </div>
        <button onClick={fecharModal} className='botaoFechar'>
          Fechar
        </button>
      </Modal>
    </main>
  );
}
