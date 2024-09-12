import './quinto.css'

function CJ() {
    return (
        <>
            <body className="cadastro_jornalista">
                <div>
                    <form className="form-cadastro-jornalista">
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
                        <input type="text" id="rua" name="rua" required />
                        <label for="nome">Número</label>
                        <input type="text" id="numero" name="numero" required />
                        <label for="nome">Email</label>
                        <input type="text" id="email" name="email" required />
                        <label for="nome">Senha</label>
                        <input type="text" id="senha" name="senha" required />

                        <label for="materia">Escreva uma pequena matéria:</label>
                        <textarea id="materia" name="materia" maxlength="2000" oninput="this.nextElementSibling.innerText = `${this.value.length}/2000`"></textarea>
                        <span>0/2000</span>

                        <label for="curriculo">Anexar currículo:</label>
                        <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" />

                        <a href='setimo'><button className="botao-prosseguir">Prosseguir</button></a>
                    </form>
                </div>
            </body>
        </>);
}

export default CJ;