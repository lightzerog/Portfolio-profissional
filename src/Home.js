import React from 'react';
import Navbar from './Navbar';
import popperjs from '@popperjs/core';
import Card from './Card';
import './css/home.css'
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';
import Perfil2 from './images/perfil2.jpg';
import Background from './images/background.png';
import QRCode from './images/qrcode.png';
import Teste1 from './images/teste1.png';
import Teste2 from './images/teste2.png';
import Teste3 from './images/teste3.png';
import { SiCsharp, SiGithub, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiAdobephotoshop, SiReact, SiMysql, SiMicrosoftsqlserver, SiVisualstudio, SiBlender, SiUnity, SiAdobeillustrator, SiInstagram, SiLinkedin } from 'react-icons/si';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Helmet } from "react-helmet";

function Home() {
    return (
        <div id="divPrincipal" className="">
            <Helmet>
                <title>Marcelo Bonfim - Home</title>
            </Helmet>
            <div className="row">
                <div className="col-md-12">
                    <Navbar></Navbar>
                </div>
            </div>
            <Pulse>
                <div className="container-fluid">
                    <div className="row gy-4 p-4" id="noticias">
                        <div id="noticiasEstilo" className="text-start px-4 py-4 col-md-12 col-lg-6">
                            <div class="row gx-0">
                                <div class="" id="botoeswindows1"></div>
                                <div class="" id="botoeswindows2"></div>
                                <div class="" id="botoeswindows3"></div>
                            </div>

                            <ol type="1" id="helloworldlista">
                                <li><h2>//portfolio.js</h2></li>
                                <li><h2>alert(' Hello, world! ');</h2></li>
                                <li><h2>scripts sucessfully compiled...</h2></li>
                                <li><h2>¬</h2></li>
                            </ol>
                            <h1 className="text-start ">Hello, world!</h1>
                            <div>
                                <div class="" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item mt-4 ">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button text-black bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Sobre mim...
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body row">
                                                <div class="col-sm-6 text-center mt-5" id="circle">
                                                    <img src={Perfil2} className="img-fluid" alt="Responsive image" id="imagemPerfil"></img>
                                                    <h5 className="text-black mt-3">Marcelo Lizeo Bonfim, 27</h5>
                                                </div>
                                                <div class="col-sm-6 mt-5 mt-md-0">
                                                    <p>Me especializando em desenvolvimento <strong>Front-end e Back-end,</strong> estou em progresso continuo ampliando todos os meus conhecimentos que fazem parte do desenvolvimento <strong>web</strong> e também para aplicativos mobile <strong>(Android & iOs).</strong><br></br><br></br>
                                                        Tenho total interesse em cada dia aprender mais e mais sobre as frameworks e linguagens utilizadas para abrangir o arsenal de possibilidades e projetos utilizando das novas tecnologias, para ter uma base de conhecimento mais ampla e aprimorar minhas habilidades como programador.
                                                        <br></br><br></br>
                                                        Na seção <strong>Projetos</strong> dentro do menu Dropdown estão listados alguns projetos meus finalizados e em andamento!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                        <img src={Background} className="img-fluid w-75 mt-5 mx-auto d-none d-lg-block" alt="Responsive image" id="imagemPerfil"></img>
                        </div>
                    </div>

                    <div className="row mt-0">

                        <div id="conhecimentos" className="px-5 py-5">

                            <p className="h1 text-center font-weight-bold">Conhecimento Geral</p>
                            <Bounce left>
                                <div className="row mt-5" id="maisinformacoes1">

                                    <div className="col-md-6 py-3 px-3">
                                        <div className="py-0 px-0">
                                            <h4 class="display-5 text-md-left text-sm-left margin">Para acompanhar o mercado de trabalho e toda a sua necessidade atual foi preciso conhecer e estudar
                                                as ferramentas e linguagens mais recentes assim suprindo a alta demanda com agilidade!
                                                <br></br><br></br>
                                                Esse projeto de portfólio pessoal foi desenvolvido se utilizando de algumas dessas tecnologias abaixo.</h4>
                                        </div>
                                    </div>
                                    <Slide bottom>
                                        <div className="col-md-6 px-3">
                                            <div className="row-sm-12">
                                                <div className="row text-center">
                                                    <div className="col-4 py-3 px-3">
                                                        <Tippy content='Javascript'>
                                                            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                                <h2><SiJavascript /></h2>
                                                            </button>
                                                        </Tippy>
                                                    </div>
                                                    <div className="col-4 py-3 px-3">
                                                        <Tippy content='C#'>
                                                            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                                <h2><SiCsharp /></h2>
                                                            </button>
                                                        </Tippy>
                                                    </div><div className="col-4  py-3 px-3">
                                                        <Tippy content='Bootstrap 5'>
                                                            <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                                <h2><SiBootstrap /></h2>
                                                            </button>
                                                        </Tippy>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <div className="col-4 py-3 px-3">
                                                    <Tippy content='HTML5'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiHtml5 /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                                <div className="col-4  py-3 px-3">
                                                    <Tippy content='CSS3'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiCss3 /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div><div className="col-4  py-3 px-3">
                                                    <Tippy content='Adobe Photoshop'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiAdobephotoshop /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <div className="col-4 py-3 px-3">
                                                    <Tippy content='ReactJS'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiReact /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                                <div className="col-4  py-3 px-3">
                                                    <Tippy content='MySQL'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiMysql /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div><div className="col-4  py-3 px-3">
                                                    <Tippy content='Adobe Illustrator'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiAdobeillustrator /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <div className="col-4 py-3 px-3">
                                                    <Tippy content='Visual Studio / VS Code'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiVisualstudio /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                                <div className="col-4  py-3 px-3">
                                                    <Tippy content='Blender'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiBlender /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div><div className="col-4  py-3 px-3">
                                                    <Tippy content='Unity'>
                                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                            <h2><SiUnity /></h2>
                                                        </button>
                                                    </Tippy>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 bg-white" id="redessociais" >
                            <p className="text-center bg-white" id="redessociais">Redes sociais</p>


                            <ul class="border-0 list-group list-group-flush mx-auto bg-white">
                                <li class="border-0  list-group-item bg-white">
                                    <div className="btn-group col-12" role="group" aria-label="Basic example">
                                        <a href="http://www.instagram.com/mabonfim" target="_blank" class="btn" role="button"><h1><SiInstagram></SiInstagram></h1></a>
                                        <a href="https://www.linkedin.com/in/marcelo-bonfim/" target="_blank" class="btn" role="button"><h1><SiLinkedin></SiLinkedin></h1></a>
                                        <a href="https://github.com/lightzerog" target="_blank" class="btn" role="button"><h1><SiGithub></SiGithub></h1></a>
                                    </div></li>
                            </ul>


                        </div>
                        <div className="col-md-4 bg-white text-center mt-4 mt-md-0">
                            <p className="text-center" id="redessociais">Curriculo</p>
                            <div className="mx-auto">
                                <a href="https://qrco.de/bd2UQN" target="_blank" class="btn btn-primary mt-3" role="button"><h4>Visualizar currículo</h4></a>

                            </div>
                        </div>
                        <div className="col-md-4 bg-white mt-5 mt-md-0">
                            <p className="text-center" id="redessociais">Contatos</p>
                            <li className="border-0 list-group-item mx-auto text-break bg-white text-center">
                                <h4>Jardim Ártico, Araraquara - SP</h4>
                                <h4>(16)99606-8812</h4>
                                <h4><a href="mailto: mar.lizeo@hotmail.com">Envie um e-mail</a></h4>
                            </li>
                        </div>
                    </div>
                </div>



            </Pulse >
            <footer>

            </footer>

        </div >
    )
}

export default Home;