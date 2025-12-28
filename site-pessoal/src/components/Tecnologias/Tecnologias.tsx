import "./style.css";
function Tecnologias() {
    return (
        <>
            <div className="tecnologias-container">
                <h1>Tecnologias que utilizo:</h1>
                <div className="topicos-container">
                    <div className="topico-container">
                        <h2>Linguagens de Programação</h2>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="topico-container">
                        <h2>Frameworks e Bibliotecas</h2>
                        <ul>
                            <li>Django</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="topico-container">
                        <h2>Demais ferramentas</h2>
                        <ul>
                            <li>Docker</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tecnologias;