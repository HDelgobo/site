import './index.css'

function Login(){
    return(
        <>
        <div className="container">
            <h1 className="titulo">Você está preparado para descobrir a verdade!</h1>
            <div className="botoes">
                <a href="terceiro"><button className="botao-cadastro">Cadastro</button></a>
                <a href="/segundo"><button className="botao-login">Login</button></a>
            </div>
        </div>
        </>);
}

export default Login;