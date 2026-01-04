import "./style.css";

function Qualificacoes() {
    return (
        <>
        <div className="qualificacoes-container">
            <h1>Qualificações</h1>
            <div className="qualificacao-elementos-container">
                <div className="qualificacao">
                    <h1>Bacharelado em Sistemas de Informação - USP</h1>
                    <p className="qualificacao-periodo">Março de 2023 - Atualmente</p>
                    <p className="qualificacao-descricao">O bacharelado em Sistemas de Informação continuamente me permite adquirir conhecimentos fundamentais e sólidos de computação, permitindo que eu possa entender processos em sistemas operacionais, comunicação entre sistemas, bancos de dados e padrões de projeto; assim desenvolver aplicações de ponta-a-ponta.</p>
                </div>
                <div className="qualificacao">
                    <h1>Técnico em Desenvolvimento de Sistemas - ETEC</h1>
                    <p className="qualificacao-periodo">Fevereiro de 2023 - Julho de 2024</p>
                    <p className="qualificacao-descricao">O técnico em Desenvolvimento de Sistemas me introduziu conceitos sobre como funcionam sistemas web, bancos de dados, sistemas operacionais, protocolos de redes, entre outros. E no final me permitiu desenvolver um sistema completo com os conhecimentos adquiridos ao longo do curso.</p>
                </div>
            </div>
        </div>
        </>
    )    
}

export default Qualificacoes;