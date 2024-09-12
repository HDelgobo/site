import './quarto.css'

function CA() {
    return (
        <>
            <body className="cadastro_assinante">
                <div>
                    <form className="form-cadastro">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" required />
                        <label for="nome">Aniversario</label>
                        <input type="text" id="aniversario" name="aniversario" required />
                        <label for="nome">Telefone</label>
                        <input type="text" id="telefone" name="telefone" required />
                        <label for="nome">CPF</label>
                        <input type="text" id="cpf" name="cpf" required />
                        <h2>Endereço</h2>
                        <label for="nome">CEP</label>
                        <input type="text" id="cep" name="cep" required />
                        <label for="nome">Pais</label>
                        <input type="text" id="pais" name="pais" required />
                        <label for="nome">UF</label>
                        <input type="text" id="uf" name="uf" required />
                        <label for="nome">Cidade</label>
                        <input type="text" id="cidade" name="cidade" required />
                        <label for="nome">Bairro</label>
                        <input type="text" id="bairro" name="bairro" required />
                        <label for="nome">Rua</label>
                        <input type="text" id="rua" name="rua" required />;
                        <label for="nome">Número</label>
                        <input type="text" id="numero" name="numero" required />;
                        <label for="nome">Email</label>
                        <input type="text" id="email" name="email" required />;
                        <label for="nome">Senha</label>
                        <input type="text" id="senha" name="senha" required />;

                        <a href='/sexto'><button className="botao-prosseguir">Prosseguir</button></a>
                    </form>;
                    <div className="outras-opcoes">
                        <p>Outras opções de cadastro:</p>
                        <button>Facebook</button>
                        <button>Google</button>
                    </div>;
                </div>;
            </body>;
        </>);
}

export default CA;