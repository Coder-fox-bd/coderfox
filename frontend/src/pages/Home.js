import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
class Home extends Component {
    render() {
	    return (
		<div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                <div className="container">
                <a className="navbar-brand" href="file:///E:/Websites/coderfox_design/index.html">
                    <img src="assets\local\img\coderfox.png" alt="" className="img-fluid"/>
                </a>
                <button id="ChangeToggle" className="navbar-toggler ml-auto float-right" type="button">
                    <div id="navbar-hamburger">
                    <span className="navbar-toggler-icon"></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="file:///E:/Websites/coderfox_design/index.html">Home
                            <span className="sr-only">(current)</span>
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="file:///E:/Websites/coderfox_design/classes.html">Classes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Login</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div id="mySidenav" className="sidenav">
                <a href="#!" className="closebtn">&times;</a>
                <a href="/#">About</a>
                <a href="/#">Services</a>
                <a href="/#">Clients</a>
                <a href="/#">Contact</a>
                </div>
            </nav>


            <div className="parallax">
                <div className="container">
                <div className="center-div">
                    <div className="row">
                    <div className="col-md-8">
                        <section id="about">
                        <div className="details">
                            <h2>Hi, I'm AKRAM HOSSAIN. I...<br/>
                                    <Typewriter 
                                        options={{
                                            delay: 0,
                                            }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString("am a Full-Stack Web Developer.")
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString("love everything about code.")
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString("also teach programming to people.")
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString("will try to help you make your vision a reality.")
                                            .callFunction(() =>{
                                                document.getElementsByClassName("Typewriter__wrapper")[0].style.cssText = "color: #fff; background-color: #C8412B;";
                                            })
                                            .start();
                                        }}
                                    />
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="cta text-center">
                                <a className="my-button cta-button expand form-button" href="mailto:akramhossainrabbi@yahoo.com">Get In Touch</a>
                            </div>
                            </div>
                            <div className="col-sm-12">
                            <div className="my-arrow-div text-center">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/coder-fox-bd"><i className="fab fa-github fa-2x"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/coderfoxbd"><i className="fab fa-facebook fa-2x"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/coderfoxbd/"><i className="fab fa-linkedin fa-2x"></i></a>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    </div>
                </div>
                </div>
            </div>



            <section id="experience">
                <div className="">
                <div className="row">
                    <div className="col-sm-12">
                    <h2 className="text-center">My Experience</h2>
                    <p className="text-center tag-line">Specialist in need. Generalist at heart.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center experience-topics">
                    <i className="fas fa-laptop"></i>
                    <h3>Front-end</h3>
                    <ul>
                        <li>html(5)</li>
                        <li>css(3)</li>
                        <li>Javascript</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Api | Ajax</li>
                    </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center experience-topics">
                    <i className="fas fa-server"></i>
                    <h3>Back-end</h3>
                    <ul>
                        <li>NPM</li>
                        <li>SQL</li>
                        <li>Mongo</li>
                        <li>Restful Web Services</li>
                        <li>Laravel | PHP</li>
                        <li>django | Python</li>
                    </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center experience-topics">
                    <i className="fas fa-star"></i>
                    <h3>Tools</h3>
                    <ul>
                        <li>Vim</li>
                        <li>Bower</li>
                        <li>Atom || PhpStorm || VSCode</li>
                        <li>Github && Bitbucket</li>
                        <li>SSH</li>
                        <li>Gulp</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>



            <section id="work">
                <h2 className="text-center">Work</h2>
                <div className="">
                <p className="text-center tag-line">Here are few of my former clients.</p>
                </div>


                <div className="row work-row">
                <div className="col-sm-12 col-md-6">
                    <video className="work_video" loop autoPlay controls muted>
                    <source src="assets/local/images/edumaster.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="details details-ftm">
                    <h3>Edumaster</h3>
                    <p className="platform">Web</p>
                    <p className="icons"><i className="fas fa-desktop"></i><i className="fas fa-tablet-alt"></i><i className="fas fa-mobile-alt"></i></p>
                    <p>EDUMASTER is a school management software which will help the administration of a school to collect, store, manage and analyze data, paving the way to paperless governance of the institution.</p>
                    <a className="my-button" target="_blank" rel="noopener noreferrer" href="https://onelimitedbd.com/edumaster-school-management-software/">Visit Website</a>
                    </div>
                </div>
                </div>

                <div className="row work-row">
                <div className="col-sm-12 col-md-6">
                    <div className="details details-ftm">
                    <h3>E-SPORTS BD</h3>
                    <p className="platform">Web</p>
                    <p className="icons"><i className="fas fa-desktop"></i><i className="fas fa-tablet-alt"></i><i className="fas fa-mobile-alt"></i></p>
                    <p>E-SPORTS BD is a e-sports company in Bangladesh. Where mobile gamers can
                    register for various kind of mobile game. And after playing game they get reward.</p>
                    <a className="my-button" target="_blank" rel="noopener noreferrer" href="http://www.e-sports.com.bd">Visit Website</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 order-first order-md-last">
                    <img src="assets/local/images/esportsbd.png" alt="" className="img-fluid"/>
                </div>
                </div>

                <div className="row work-row">
                <div className="col-sm-12 col-md-6">
                    <img src="assets/local/images/gazipurzp.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="details details-ftm">
                    <h3>Gazipur Zila Parishad</h3>
                    <p className="platform">Web</p>
                    <p className="icons"><i className="fas fa-desktop"></i><i className="fas fa-tablet-alt"></i><i className="fas fa-mobile-alt"></i></p>
                    <p>This is a webapp for Gazipur zila parishad. Here they give notices, take application for tenders, take application for various training, pass tender, transfer files from one officer to
                    other and also print students certificate which is totally automated.</p>
                    <a className="my-button" target="_blank" rel="noopener noreferrer" href="http://www.zpgazipur.gov.bd/">Visit Website</a>
                    </div>
                </div>
                </div>

                <div className="row work-row">
                <div className="col-sm-12 col-md-6">
                    <div className="details details-ftm">
                    <h3>PlayForMoney</h3>
                    <p className="platform">Web</p>
                    <p className="icons"><i className="fas fa-desktop"></i><i className="fas fa-tablet-alt"></i><i className="fas fa-mobile-alt"></i></p>
                    <p>Playformoney is an esports web. Here they organize tournaments for gamers.
                    Gamers register for tournaments and play game with them.</p>
                    <a className="my-button" target="_blank" rel="noopener noreferrer" href="http://www.playformoney.net">Visit Website</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 order-first order-md-last">
                    <img src="assets/local/images/playformoney.png" alt="" className="img-fluid"/>
                </div>
                </div>
            </section>

            <section id="teaching">
                <h2 className="text-center">Teaching</h2>
                <div className="row">
                <div className="col-md-12">
                    <p className="text-center tag-line">In the last couple of years, I've taught programming to hundreds of students both privately in person and remotely. Here are some of the domains I've helped students with...</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 text-center">
                    <div className="teaching-domains">
                    </div>
                </div>
                </div>
            </section>

            <section id="footer-cta">
                <h2 className="text-center">Wanna work with me?</h2>
                <p></p>
                <div className="row text-center">
                <div className="col-sm-12">
                    <p className="text-center">I'm currently available for work.</p>
                </div>
                <div className="col-sm-12" id="startButtonDiv">
                    <a className="my-button form-button" href="mailto:akramhossainrabbi@yahoo.com">Start Now</a>
                </div>
                </div>
            </section>








            <footer id="fh5co-footer" className="fh5co-bg" role="contentinfo">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row row-pb-md">
                    <div className="col-md-4 fh5co-widget">
                        <h3>A Little About CoderFoxBD.</h3>
                        <p style={{color: '#656565'}}>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p><a className="btn btn-primary" href="/#">Become A Friend</a></p>
                    </div>
                    <div className="col-md-6">
                        <h3>Classes</h3>
                        <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <ul className="fh5co-footer-links">
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <ul className="fh5co-footer-links">
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <ul className="fh5co-footer-links">
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            <li><a href="/#">-------</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3>Follow Me</h3>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/coderfoxbd"><i className="fab fa-facebook fa-2x"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/coder-fox-bd"><i className="fab fa-github fa-2x"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/coderfoxbd/"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                    </div>

                    <div className="row copyright mt-4">
                    <div className="col-md-12 text-center">
                        <p>
                        <small className="block">&copy; 2020 | All Rights Reserved.</small> 
                        <small className="block">Powered by  coderfoxbd.com</small>
                        </p>
                    </div>
                    </div>

                </div>
            </footer>
          
        </div>  
	     );
    }
}
export default Home;