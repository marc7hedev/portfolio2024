import { useRef } from "react";
import "./services.scss";
import {motion, useInView } from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});

    return (
    <motion.div 
        className="services" 
        variants={variants} 
        initial="initial"  
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        //animate={isInView && "animate"}
        animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>Siempre a la vanguardia actualizado<br /> con las nuevas tecnologías</p>
            <hr />
        </motion.div>
        
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    Ideas <motion.b whileHover={{color:"purple"}}>Únicas</motion.b>
                </h1>
            </div>
            <div className="title">
                <h1>
                    Para tus <motion.b whileHover={{color:"purple"}}>Proyectos.</motion.b>
                </h1>
                <button>MIS SERVICIOS</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" 
            whileHover={{background: "lightgray", color: "black"}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Automatizaciones</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Chatbots IA</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe officia consequatur delectus ea minima, et mollitia ab, adipisci ad necessitatibus animi neque libero. Hic assumenda accusamus doloremque magnam voluptatibus?
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Seguridad</h2>
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