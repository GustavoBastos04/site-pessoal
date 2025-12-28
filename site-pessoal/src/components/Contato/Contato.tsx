import "./style.css";
import Footer from "../Footer/Footer";
function Contato() {
    return (
        <>
            <div className="contato-container">
                <div className="conteudo-contato">
                    <h1>Meios de Contato e outros links:</h1>
                    <div className="contatos-container">
                        <div className="contato-info"><a href="https://www.linkedin.com/in/gustavo-bastos-014b5a261/">LinkedIn</a></div>
                        <div className="contato-info"><a href="http://wa.me/11950210440">WhatsApp</a></div>
                        <div className="contato-info"><a>Telefone: +55 (11) 95021-0440</a></div>
                        <div className="contato-info"><a>gubasouza2004@gmail.com</a></div>
                        <div className="contato-info"><a href="https://github.com/GustavoBastos04">GitHub</a></div>
                    </div>
                 </div>
                <Footer/>
            </div>
        </>
    )
}

export default Contato;