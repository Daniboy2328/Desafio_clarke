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

export function Index() {
  const [consumo, setConsumo] = useState<string>('');
  const [resultados, setResultados] = useState<Fornecedor[]>([]);
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const handleCalcularMelhoresFornecedores = async () => {
    try {
      const response = await axios.post<{ melhores_fornecedores: Fornecedor[] }>(
        'http://127.0.0.1:5000/calcular-melhores-fornecedores',
        { consumo: Number(consumo) }
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

      {/* Modal */}
      <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
        <h2>Fornecedores Indicados: </h2>
        <ul>
          {resultados.map((fornecedor) => (
            <li key={fornecedor.nome}>
              {fornecedor.nome} - <img src={`http://127.0.0.1:5000/${fornecedor.logo}`} alt={fornecedor.nome} />
            </li>
          ))}
        </ul>
        <button onClick={fecharModal}>Fechar Modal</button>
      </Modal>
    </main>
  );
}