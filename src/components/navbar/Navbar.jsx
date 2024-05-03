import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}

                >Marco Rangel</motion.span>
                <div className="social">
                    <a href="https://github.com/marc7hedev" target="_blank"><img src="/github.png" alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/marcogonzalezrangel/" target="_blank"><img src="/linkedin.png" alt="Linkedin"/></a>
                    <a href="https://twitter.com/MarcSie7e" target="_blank"><img src="/x.png" alt="X"/></a>
                    <a href="https://codepen.io/marc7hedev" target="_blank"><img src="/codepen.png" alt="Codepen"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar