import './index.css'
export function Index (){
    return (
        <main className='corpo'>
            <div className='leftframe'>
                <h2 className='tituloEsquerda'>
                Não jogue dinheiro fora!<br/>Encontre o melhor<br/>fornecedor para as<br/>suas necessidades.
                </h2>
                <img src="src\images\Wind turbine-bro.png" className='eolica'/>
            </div>
            <div className='rightframe'>
                <div className='inputBox'>
                    <h2 className='titulo'>
                        Preencha o campo para achar<br/>o melhor fornecedor.
                    </h2>

                    <h2 className='subtitulo'>
                        Qual é o consumo mensal de energia<br/>da sua empresa?
                    </h2>

                    <input className='entrada' placeholder='Digite aqui.'>
                    </input>
                    <button className='calcular'>
                        Calcular
                    </button>
                </div>
            </div>
        </main>
    );
}