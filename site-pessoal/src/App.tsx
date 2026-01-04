import {useEffect} from 'react';
import './App.css'
import  Header  from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualificacoes from './components/Qualificacoes/Qualificacoes';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() =>{
    const sr = ScrollReveal({duration: 1000, delay: 300, reset:false});
    sr.reveal('#inicio')
    sr.reveal('#qualificacoes')
    sr.reveal('#tecnologias')
    sr.reveal('#projetos')
    sr.reveal('#contato')
  }, [])   
  return (
    <>
    <div className='main-container'>
      <Header />


      <section id="inicio">
        <Home/>
      </section>

      <section id="qualificacoes">
        <Qualificacoes/>
      </section>

      <section id="tecnologias">
        <Tecnologias/>      
      </section>

      <section id="projetos">
        <Projetos/>      
      </section>

      <section id="contato">
        <Contato/>
      </section>
    </div>
    </>
  )
}

export default App
