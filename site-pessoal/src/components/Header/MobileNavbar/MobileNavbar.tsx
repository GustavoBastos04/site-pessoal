import './style.css';
import codeLogo from '../../../assets/codeLogo.svg';
import menu_icon from '../../../assets/menu_icon.svg'
function MobileNavbar() {

    return (
        <>
        <header>
            <nav>
                <img src={codeLogo} alt="code-logo" />
                <p>Desenvolvedor Full-Stack</p>
                <img src={menu_icon} alt="menu_icon"/>
            </nav>
        </header>    
        </>
    )
}

export default MobileNavbar;