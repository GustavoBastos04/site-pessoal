import "./style.css"
function Projetos() {
    return (
        <>
            <div className="projetos-container">
                <h1>Projetos Pessoais:</h1>
                <div className="conjunto-projetos-container">
                    <div className="projeto-container">
                        <h2>Sistema de Padaria Pão-Tech</h2>
                        <p>A ideia desse projeto é um sistema escalável que utilize tecnologias modernas que pode ser aplicado em padarias de diferentes tamanhos, de foram a englobar grande parte do negócio e como alternativa à substituição de sistemas ultrapassados utilizados em pequenos negócios ou padarias sem nenhum uso de um sistema</p>
                        <a href="https://github.com/GustavoBastos04/Sistema-de-padaria">Ver projeto</a>
                    </div>
                    <div className="projeto-container">
                        <h2>Projeto Reciclagem ETEC Gino Rezaghi</h2>
                        <p>Desenvolvimento de uma plataforma digital que simplifique a gestão da pontuação obtida pelos alunos da ETEC Gino Rezaghi em decorrência do projeto de reciclagem existente. O sistema contabiliza a coleta de materiais recicláveis por pessoa e permite listar, adicionar, remover e atualizar dados do processo. As pontuações dadas levam em conta tanto a quantidade quanto o tipo de material coletado.</p>
                        <a href="https://github.com/GustavoBastos04/Projeto_Reciclagem_ETEC_Gino_Rezaghi">Ver projeto</a>
                    </div>
                </div>
            </div>
        </>
    )    
}

export default Projetos;