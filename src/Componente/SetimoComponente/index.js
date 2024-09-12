import './setimo.css'

function Noticia(){
    return(
        <>
        <body className="inicio_noticia">
    <header className="cabecalho">
        <h1 className="titulo-site">Verdade Proibida</h1>
        <a href="/oitavo" className="perfil-link">Perfil</a>
    </header>
    <main className="noticias-container">
        <div className="noticia">
            <a href="/nono"><img src="Imagens/materia 1 (nasa).webp" alt="Imagem da Notícia"/></a>
            <h4>Cientistas descobrem que a lua é um holograma controlado por uma inteligência alienígena!</h4>
        </div>
        
    </main>
</body>
        </>);
}

export default Noticia;