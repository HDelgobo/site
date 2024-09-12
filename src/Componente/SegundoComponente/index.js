import './segundo.css'

function Entrar() {
    return (
        <>
            <div className="container_login">
                <form className="form-login">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>

                        <label for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" required/>

                            <button className="botao-prosseguir" onclick="window.location.href='inicio _noticia.html'">Prosseguir</button>
                            <p><a href="/terceiro" class="link-cadastrar">Cadastrar-se</a></p>
                       
                </form>

            </div>

        </>);
}

export default Entrar;