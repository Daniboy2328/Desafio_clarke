import './navbar.css';
export function Navbar (){
 return(
    <nav>
        <img src="src\images\clarke_energia_BRANCO-1.png" alt="Logo" className='logo'/>
            <div className='links'>
                <h1>Sobre nós</h1>
                <h1>Contato</h1>
                <button>Seja nosso cliente</button>
            </div>
    </nav>
 );
}