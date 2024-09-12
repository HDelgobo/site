import './sexto.css'

function Pagamento(){
    return(
        <>
        <div>
        <form className="form-pagamento">
            <label for="numero-cartao">Número do Cartão</label>
            <input type="text" id="numero-cartao" name="numero-cartao" required/>
            <label for="numero-cartao">Data de vencimento</label>
            <input type="text" id="data-de-vencimento" name="data-de-vencimento" required/>
            <label for="numero-cartao">CVV</label>
            <input type="text" id="cvv" name="cvv" required/>
            <label for="numero-cartao">Nome do titular</label>
            <input type="text" id="nome-do-titular" name="nome-do-titular" required/>
            
            <a href='/setimo'><button>Prosseguir</button></a>
        </form>
    </div>
        </>);
}

export default Pagamento;