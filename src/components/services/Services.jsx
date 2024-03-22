import "./services.scss";
import {motion} from "framer-motion";


const Services = () => {
    return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>I focus on helping you brand grow<br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <b>Unique</b>Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b>Business.
                </h1>
                <button>MIS SERVICIOS</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" 
            whileHover={{background: "lightgray", color: "black"}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default Services