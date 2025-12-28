import './style.css';
import codeLogo from "../../assets/codeLogo.svg";
function Header() {
    return (
        <>
        <header>
            <nav>
                <img src={codeLogo} alt="code-logo" />
                <a href="#inicio">Início</a>
                <a href="#qualificacoes">Qualificações</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>            
        </>
    )

}

export default Header;