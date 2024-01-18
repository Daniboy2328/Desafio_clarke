import './navbar.css';
export function Navbar (){
 return(
    <div className='navbar'>
        <img src="src\images\clarke_energia_BRANCO-1.png" alt="Logo" className='logo'/>
            <div className='links'>
                <h1 className='info'>Sobre nós</h1>
                <h1 className='info'>Contato</h1>
                <button className='botao'>Seja nosso cliente</button>
            </div>
    </div>
 );
}