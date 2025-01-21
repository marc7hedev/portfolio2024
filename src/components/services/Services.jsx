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
        
        
        <motion.div className="titleContainer" variants={variants}>
            {/* <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    Ideas <motion.b whileHover={{color:"purple"}}>Únicas</motion.b>
                </h1>
            </div> */}
            <div className="title">
                {/* <h1>
                    Para tus <motion.b whileHover={{color:"purple"}}>Proyectos.</motion.b>
                </h1> */}
                <button className="button">
                    <span className="actual-text">&nbsp;SERVICIOS&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;SERVICIOS&nbsp;</span>
                </button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" 
            whileHover={{borderColor:"purple", boxShadow: "0 0 35px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Aplicaciones web</h2>
                <p>
                    Desarrollo de páginas web.<br />Tiendas en línea (e-commerce).<br/>Aplicaciones basadas en web.<br />Sistemas ERP.
                </p>
                {/* <button>Solicitar</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 35px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Automatizaciones</h2>
                <p>
                    Implementación de sistemas automatizados que se encarguen de realizar de manera eficiente las tareas repetitivas, mostrando los resultados en Dashboards.
                </p>
                {/* <button>Solicitar</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 35px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Migraciones</h2>
                <p>
                    Implementación de procesos ETL (Extract, Transform, Load) para migrar datos de un sistema a otro, sin perder la integridad de la información.
                </p>
                {/* <button>Solicitar</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{borderColor:"purple", boxShadow: "0 0 35px 7px rgba(128, 0, 128, 0.5)", transition: { duration: 0.3 }}}>
                <h2>Soporte Técnico e Infraestructura IT</h2>
                <p>
                    <br />Gestión de dominios, hosting y certificados SSL.
                    <br />Optimización de sistemas y redes locales.
                    <br />Soporte técnico remoto.
                </p>
                {/* <button>Solicitar</button> */}
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default Services