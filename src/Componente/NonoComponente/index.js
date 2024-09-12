import './nono.css'

function NE() {
    return (
        <>
                <h1 className="titulo-noticia">Título da Notícia</h1>
                <img src="caminho-da-imagem.jpg" alt="Imagem da Notícia"/>
                    <article className="conteudo-noticia">
                        <p>Escreva aqui o conteúdo da notícia.</p>
                    </article>
                    <aside className="noticias-relacionadas">
                        <h3>Notícias Relacionadas</h3>
                        <div className="noticias-relacionada">
                            <img src="caminho-da-imagem.jpg" alt="Imagem Relacionada"/>
                                <p>Título da Notícia Relacionada</p>
                        </div>
                    </aside>
                    <div className="interacoes">
                        <button>Like</button>
                        <button>Dislike</button>
                    </div>
        </>);
}

export default NE;