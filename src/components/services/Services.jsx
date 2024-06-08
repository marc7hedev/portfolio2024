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
                <button className="button">
                    <span className="actual-text">&nbsp;SERVICIOS&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;SERVICIOS&nbsp;</span>
                </button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" 
            whileHover={{borderColor:"purple", boxShadow: "0 0 10px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Desarrollo de páginas web.<br />Tiendas en línea (e-commerce).<br/>Aplicaciones basadas en web.<br />Sistemas ERP.
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 10px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Automatizaciones</h2>
                <p>
                    Implementación de sistemas automatizados que se encarguen de realizar de manera eficiente las tareas repetitivas, mostrando los resultados en Dashboards.
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 10px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Chatbots IA</h2>
                <p>
                    Asistentes virtuales.<br />Soporte técnico.<br />Agentes de ventas.<br />Chatbots a la medida según tus necesidades.
                </p>
                <button>Solicitar</button>
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 10px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Seguridad</h2>
                <p>
                    Te ayudo a implementar las mejores medidas de seguridad en tus proyectos y plataformas, protegiéndote así de ciber ataques que pueden hacerle mucho daño a tu negocio.
                </p>
                <button>Solicitar</button>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default Services