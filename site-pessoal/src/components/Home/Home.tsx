import "./style.css";
import profile_photo from "../../assets/profile_photo.jpeg";
function Home() {
    
    return (
        <>
        <div className="inicio-container">
            <div className="image-container">
                <img src={profile_photo} alt="Foto de perfil" />
            </div>
            <div className="about-container">
                <h1>Olá, sou Gustavo Bastos!</h1>
                <p>Eu sou um desenvolvedor full-stack cursando o bacharelado em Sistemas de Informação pela USP e desenvolvendo software na Vivo Telefônica. Comecei minha jornada ao estudar lógica de programação e algoritmos por conta própria. Após isso cursei um técnico em desenvolvimento de sistemas pela ETEC e consegui ser aprovado em uma faculdade de referência para construir uma base sólida em computação. Tenho o objetivo de cada vez mais aprofundar meu conhecimento no desenvolvimento de aplicações web, tanto no front-end como back-end.</p>
            </div>
        </div>
        </>
    )
}

export default Home;