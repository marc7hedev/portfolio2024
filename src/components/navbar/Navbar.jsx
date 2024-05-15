import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Marco Rangel
                </motion.span>

                {/* <div className="social">
                    <a href="https://github.com/marc7hedev" target="_blank"><img src="/github.png" alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/marcogonzalezrangel/" target="_blank"><img src="/linkedin.png" alt="Linkedin"/></a>
                    <a href="https://twitter.com/MarcSie7e" target="_blank"><img src="/x.png" alt="X"/></a>
                    <a href="https://codepen.io/marc7hedev" target="_blank"><img src="/codepen.png" alt="Codepen"/></a>
                </div> */}



                <ul className="social">
                    <li className="social-item">
                        <a className="social-link" href="/">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="/">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="/">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>




            </div>
        </div>
    );
}

export default Navbar