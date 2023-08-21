import background from './static/background.jpg';
import profile from './static/profile2.jpeg';
import profile2 from './static/profile3.png';
import profile3 from './static/profile4.png';
import profile4 from './static/profile5.png';
import profile5 from './static/profile6.png';
import creatrify from './static/creatrify.jpeg';
import arkayde from './static/arkayde.jpeg';
import blossomvr from './static/BlossomVR.jpeg';
import sofia from './static/sofiahealth.jpeg';
import instagram from './static/instagram.png';
import linkedin from './static/linkedin.png';
import github from './static/github.png';
import gmail from './static/gmail.png';
import document from './static/doc.png';
import personalweb from './static/personalwebsite.png';
import meteorstrike from './static/meteorstrike.png';
import blossomProj from './static/blossomProj.png';
import ataxx from './static/ataxx.png';
import gitlet from './static/gitlet.png';
import scheme from './static/scheme.png';

import { motion } from "framer-motion";
import NavBar from "./NavBar";

import React, { Component } from 'react';
import './App.css';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "Creatrify",
        position: "Software Engineer Intern",
        duration: "From June 2023 to August 2023",
        desc1: "Creatrify is a startup company based in LA",
        desc2: "that provides with video steraming services to assist",
        desc3: "networking and skill-sharing with others online.",
        desc4: "I worked on improving software maintenance",
        desc5: "of its web application with other developers",
        desc6: "primarily using Angular, HTML, and SCSS."
        // title: "Click an icon on the left",
        // position: "to view more information",
        // duration: "",
        // desc1: "",
        // desc2: "",
        // desc3: "",
        // desc4: "",
        // desc5: "",
        // desc6: ""
    }
  }
 

  enableCreatrify = () => {
    console.log("enabling creatrify")
    this.setState({ 
      title: "Creatrify", 
      position: "Software Engineer Intern", 
      duration: "From June 2023 to August 2023",
      desc1: "Creatrify is a startup company based in LA",
      desc2: "that provides with video steraming services to assist",
      desc3: "networking and skill-sharing with others online.",
      desc4: "I worked on improving software maintenance",
      desc5: "of its web application with other developers",
      desc6: "primarily using Angular, HTML, and SCSS."
    })
  }

  enableBlossom = () => {
    console.log("enabling blossom")
    this.setState({ 
      title: "BlossomVR", 
      position: "Software Developer", 
      duration: "From August 2022 to May 2023",
      desc1: "BlossomVR is a student-run organization",
      desc2: "offering a virtual reality experience designed to",
      desc3: "help users relax and explore their emotions.",
      desc4: "I collaborated with other developers",
      desc5: "to create a virtual reality biofeedback simulation ",
      desc6: "using Unity, C Sharp, and Blender."
    })
  }

  enableArkayde = () => {
    console.log("enabling arkayde")
    this.setState({ 
      title: "Arkayde", 
      position: "Software Engineer Intern", 
      duration: "From May 2022 to December 2022",
      desc1: "Arkayde is a startup company in San Francisco",
      desc2: "providing a fully cryptobased online arcade service",
      desc3: "with entertaining experiences like video games.",
      desc4: "I enhanced its user interface with",
      desc5: "interactive, dynamic web components",
      desc6: "primarily using HTML, CSS, and React.js."
    })
  }

  enableSofia = () => {
    console.log("enabling sofia")
    this.setState({ 
      title: "Sofia Health", 
      position: "Graphic Design Intern", 
      duration: "From January 2022 to May 2022",
      desc1: "Sofia Health is a startup company offering",
      desc2: "health and wellness services online by facilitating",
      desc3: "connection between clients and practitioners.",
      desc4: "I designed the backdrops and banners for",
      desc5: "the company's presentation at National Association of ",
      desc6: "Nutrition Professionals Conference 2022."
    })
  }
 
  render() {
    return (
      <div>    
        <NavBar />
        <body className="-z-20 invert">
          <div className="sticky">
            <section id="up" className="-z-20 sticky"></section>
            <section id="down" className="-z-20 sticky"></section>
            <section id="left" className="-z-20 sticky"></section>
            <section id="right" className="-z-20 sticky"></section> 
            <section id="extend" className="-z-20 sticky"></section>
            <section id="left" className="-z-20 sticky"></section>
            <section id="down-extend" className="-z-20 sticky"></section>  
            <section id="down-extend-2" className="-z-20 sticky"></section> 
          </div>
          
        
        <section id="aboutme" className="z-20">
          <div className="relative z-20">
              <img className="rotate-180 full-screen cover-background opacity-0" src={background}></img>
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h2 className="absolute bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 heading-3 font-face-il text-[#000000] text-[150px] -tracking-[3px] glow">eugene.</h2>
              </motion.div>
          </div>
          <div className="flex flex-col z-40">
            <div className="mx-auto z-40 translate-x-5 -translate-y-12 font-face-im text-[#ffffff] text-[50px] tracking-[70px] text-glow-white invert">about me</div>
            <div className="invert container flex flex-row z-40 ml-20 -translate-x-5 mx-auto items-center justify-center">
              <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img className=" h-20 w-20 shadow-lg grayscale" src={profile4}></img>
              </motion.div>
              
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img className="ml-10 h-40 w-40 shadow-lg grayscale" src={profile2}></img>
              </motion.div>
              <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <img className="ml-10 mr-10 h-80 w-80 shadow-lg" src={profile}></img>
              </motion.div>
              <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                <img className="mr-10 h-40 w-40 shadow-lg grayscale" src={profile3}></img>
              </motion.div>
              <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                <img className="h-20 w-20 shadow-lg grayscale" src={profile5}></img>

                </motion.div>
            </div>
            
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
              <div className="flex flex-col">
                <div className="mt-4 mx-auto z-10 font-face-il text-gray-500 text-[20px]"> My name is Eugene Han, a creative developer based in Berkeley, CA. </div>
                <div className="mx-auto z-10 font-face-il text-gray-500 text-[20px]"> I am currently studying Computer Science at the University of California, Berkeley. </div>
                <div className="mx-auto z-10 font-face-il text-gray-500 text-[20px]"> My goal is to effectively visualize the world of computer science:</div>
                <div className="mx-auto z-10 font-face-il text-gray-500 text-[20px]"> bringing the public close to an abstract realm.</div>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex flex-col">
                  <div className="mt-4 mx-auto z-10 font-face-il text-gray-500 text-[20px]"> My interests in Computer Science have been shaped by my past experience in art. </div>
                  <div className="mx-auto z-10 font-face-il text-gray-500 text-[20px]"> This is why my interests revolve around frontend development, computer graphics,  </div>
                  <div className="mx-auto z-10 font-face-il text-gray-500 text-[20px]"> game development, extended reality, and computer vision. </div>
                </div>
            </motion.div>
          </div>
        </section>
  
        
        
        <section id="experience" className="h-min mt-40">
          <div className="flex flex-col z-10">
            <div className="invert mt-20 z-10 mx-auto translate-x-5 translate-y-8 font-face-im text-[#ffffff] text-[50px] tracking-[70px] text-glow-white">
                experience
            </div>
            <div className="container backdrop-blur glow-white ml-60 w-2/3 bg-white/40 translate-y-20 mb-40">
              <div className="flex flex-row mx-auto translate-x-10 translate-y-5">
                <div className="invert flex flex-col mt-12 ml-40 mr-40 z-20 mb-14">
                  <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{  delay:0.4 }}
                  >
                    <button className="transform animate duration-300 grayscale brightness-75 blur-sm hover:blur-none hover:grayscale-0 hover:brightness-100 focus:blur-none focus:grayscale-0 focus:brightness-100" onClick={this.enableCreatrify}>
                      <img className="rounded-lg w-20 z-20" src={creatrify}></img>
                    </button>
                   
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{  delay:0.8 }}
                  >
                    <button className="transform animate duration-300 grayscale brightness-75 blur-sm hover:blur-none hover:grayscale-0 hover:brightness-100 focus:blur-none focus:grayscale-0 focus:brightness-100 mt-10" onClick={this.enableBlossom}>
                      <img className="rounded-lg w-20" src={blossomvr}></img>
                    </button>
                  </motion.div>
          
                  <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{  delay:1.2 }}
                  >
                    <button className="transform animate duration-300 grayscale brightness-75 blur-sm hover:blur-none hover:grayscale-0 hover:brightness-100 focus:blur-none focus:grayscale-0 focus:brightness-100 mt-10" onClick={this.enableArkayde}>
                      <img className="rounded-lg w-20" src={arkayde}></img>
                    </button>
                  </motion.div>
  
                  <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{  delay:1.6 }}
                  >
                    <div className="">
                      <button className="transform animate duration-300 grayscale brightness-75 blur-sm hover:blur-none hover:grayscale-0 hover:brightness-100 focus:blur-none focus:grayscale-0 focus:brightness-100 mt-10" onClick={this.enableSofia}>
                        <img className="rounded-lg w-20" src={sofia}></img>
                      </button>
                    </div>
                  </motion.div>  
                </div>

                <div className="-translate-x-52 translate-y-20">
                  <motion.svg
                    width="20"
                    height="400"
                    viewBox="0 0 20 800"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.line
                      x1="10"
                      y1="0"
                      x2="10"
                      y2="800"
                      stroke="#000000"
                      variants={draw}
                      custom={3}
                    />
                  </motion.svg>
                </div>
  
                <div className="flex flex-col mt-12 mr-20">
                  <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:1.6 }}
                    >
                      <div className="font-face-ib text-gray-500 text-[60px] text-left -translate-x-3"> { this.state.title }</div>
                    </motion.div>  
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:1.8 }}
                    >
                      <div className="font-face-im text-gray-500 text-[20px] text-left"> { this.state.position } </div>
                    </motion.div>  
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:2.0 }}
                    >
                      <div className="font-face-il text-gray-500 text-[16px] text-left"> { this.state.duration } </div>
                    </motion.div>  
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:2.2 }}
                    ></motion.div>
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:2.2 }}
                    >
                      <div className="flex flex-col">
                        <div className="mt-10 font-face-il text-gray-500 text-[16px] text-left"> { this.state.desc1 }
                        <br /> { this.state.desc2 } 
                        <br /> { this.state.desc3 } </div>
                      </div>
                    </motion.div>  
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:2.4 }}
                    >
                      <div className="flex flex-col">
                        <div className="mt-6 font-face-il text-gray-500 text-[16px] text-left"> { this.state.desc4 }
                        <br /> { this.state.desc5 } 
                        <br /> { this.state.desc6 } </div>
                      </div>
                    </motion.div>  
                    <motion.div
                      initial={{ opacity:0 }}
                      animate={{ opacity:1 }}
                      transition={{  duration: 0.8, delay:2.6 }}
                    >
                      <div className="flex mt-10">
                        <div class="relative inline-flex  group">
                          <div
                              class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fbbba3] via-[#f0dde5] to-[#b9acd7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                          </div>
                          <a href="#" title="Get quote now"
                              class="relative inline-flex items-center justify-center px-5 py-2.5 font-face-il text-white transition-all duration-200 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-125"
                              role="button">More Info
                          </a>
                        </div>
                      </div>
                    </motion.div> 
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section id="up" className="translate-y-70 -z-20 sticky"></section>
        <section id="down" className="translate-y-70 -z-20 sticky"></section>
        <section id="left" className="translate-y-70 -z-20 sticky"></section>
        <section id="right" className="translate-y-70 -z-20 sticky"></section> 

        <section id="project" className="">
          <div className="flex flex-col z-10">
              <div className="invert mt-40 mx-auto translate-x-5 -translate-y-12 font-face-ib text-[#ffffff] text-[50px] tracking-[50px] text-glow-white">projects</div>
              <div className="flex flex-row z-10">
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">Portfolio</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">Personal Website</div>
                  <img src={personalweb}></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    This website. It is used as a personal portfolio that not only provides a short introduction of myself but also my past experience with coding. The website features clean, seamless animation with an ethereal, dreamy atmosphere, emphasizing my calm personality. 
                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: React.js, HTML, Tailwind CSS, Framer Motion.
                  </div>
                </div>
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">2D Web Platformer Game</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">Meteor Strike</div>
                  <img src={meteorstrike} className="invert"></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    A web application featuring two-dimensional platformer games hosted with React.js. I accelerated the game development process by utilizing Phaser.js, making the physics system more realistic. The visuals were structured and designed with HTML and CSS.
                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: Phaser.js, React.js, HTML, CSS
                  </div>
                </div>
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">unity csharp vr</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">BlossomVR Vitamin</div>
                  <img src={blossomProj} className="invert"></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    A supplement virtual reality experience that is developed as part of the BlossomVR project, which foucses on emotions related to relaxation. I refactored legacy code to streamline the development process. 
                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: C Sharp, Unity, Virtual Reality, Blender
                  </div>
                </div>
              </div>
              <div className="flex flex-row z-10 mt-10">
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">Version Control System</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">Gitlet</div>
                  <img src={gitlet} className="invert"></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    This is a version control system that mimics the basic features of Git. It stores data in a tree-based structure, able to access data any time using efficient graph traversal algorithms and SHA1 serialization. 
                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: Java, Git, JUnit, SHA1
                  </div>
                </div>
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">Command Line Replica</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">Ataxx</div>
                  <img src={ataxx} className="invert"></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    This is a command line version replica of the game Ataxx. It implements both manual and automated players, where the automated players are constructed with alpha-beta pruning search algorithm based on heuristic values. 

                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: Java, Minimax
                  </div>
                </div>
                <div className="container bg-white/50 ml-10 mr-10 w-1/2 h-1/2 backdrop-blur glow-white transform animate duration-300 ease-in-out hover:-translate-y-10">
                  <div className="mt-2 text-center font-face-im text-gray-300 tracking-[2px] text-[15px]">Multi-language Translator</div>
                  <div className="mb-2 text-center font-face-ib text-gray-600 text-[30px]">Scheme Interpreter</div>
                  <img src={scheme} className="invert"></img>
                  <div className="mt-2 text-center font-face-il text-gray-600 text-[15px]">
                    This is an interpreter for a subset of the Scheme language. Built with Python, this project required understanding of lexical and syntactic analysis along with input parsing. 
                  </div>
                  <div className="mt-2 mb-2 text-center font-face-il text-gray-400 text-[15px]">
                    Skills: Python, Scheme
                  </div>
                </div>
              </div>
              <div className="mt-20 font-face-il text-gray-500 text-[20px] text-center mx-auto">And many more to come...</div>
          </div>
        </section>

        <section id="contact" className="bg-black invert">
          <h2 className="mt-20 mb-4 ml-10 tracking-[70px] translate-y-10 font-face-ib text-center text-[50px] text-white">contact</h2>
          <div className="mt-20 ml-96 mr-96 text-center font-face-im text-[20px] text-gray-500">I am always open to new opportunities in frontend development, game development, or just software engineering in general. Please feel free to reach out.</div>
          <div className="mt-5 flex flex-col">
            <div className="flex flex-row py-6 mt-6">
              <div className="mx-auto">
                <a href="https://www.instagram.com/_eugenehan/">
                  <img className="w-10" src={instagram}></img>
                </a>
              </div>
              <div className="mx-auto">
                <a href="mailto:eugenehan21@berkeley.edu">
                  <img className="w-10" src={gmail}></img>
                </a>
              </div>
              <div className="mx-auto">
                <a href="https://www.linkedin.com/in/eugene-han-401112218/">
                  <img className="w-10" src={linkedin}></img>
                </a>
              </div>
              <div className="mx-auto ">
                <a href="https://drive.google.com/file/d/13kq6TohA-GvxvtwheQxNoi10AjBzDZpH/view?usp=sharing">
                  <img className="w-10" src={document}></img>
                </a>
              </div>
              <div className="mx-auto invert">
                <a href="https://github.com/eugene-yoojin-han?tab=repositories">
                  <img className="w-10" src={github}></img>
                </a>
              </div>
            </div>
            <div className="font-face-il text-white mx-auto mt-6 mb-6">
              © Eugene Han. All rights reserved.
            </div>
          </div>
        </section>
        </body>
  
      </div>
    );
  }
}
 
export default App;



