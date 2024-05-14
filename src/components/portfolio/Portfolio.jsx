import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"Ferremateriales Medina",
        img: "../../../public/projects/ferremateriales_landin.png",
        desc: "Landing Page de la tienda 'Ferremateriales Medina', con un diseño propositivo, intuitivo y responsivo. Cuenta con elementos personalizados como marquees, además de contar con formulario de contacto, botón de Whatsapp, integración de mapas, entre otras características.",
        tools:"#Wordpress #Elementor #Js",
        link:"https://ferremateriales-medina.com/"
    },
    {
        id:2,
        title:"Ferremateriales Medina",
        img: "../../../public/projects/ferremateriales_landin.png",
        desc: "Landing Page de la tienda 'Ferremateriales Medina', con un diseño propositivo, intuitivo y responsivo",
        tools:"#Wordpress #Elementor #Js",
        link:"https://ferremateriales-medina.com/"
    },
    {
        id:3,
        title:"Ferremateriales Medina",
        img: "../../../public/projects/ferremateriales_landin.png",
        desc: "Landing Page de la tienda 'Ferremateriales Medina', con un diseño propositivo, intuitivo y responsivo",
        tools:"#Wordpress #Elementor #Js",
        link:"https://ferremateriales-medina.com/"
    },
    {
        id:4,
        title:"Ferremateriales Medina",
        img: "../../../public/projects/ferremateriales_landin.png",
        desc: "Landing Page de la tienda 'Ferremateriales Medina', con un diseño propositivo, intuitivo y responsivo",
        tools:"#Wordpress #Elementor #Js",
        link:"https://ferremateriales-medina.com/"
    },
    {
        id:5,
        title:"Ferremateriales Medina",
        img: "../../../public/projects/ferremateriales_landin.png",
        desc: "Landing Page de la tienda 'Ferremateriales Medina', con un diseño propositivo, intuitivo y responsivo",
        tools:"#Wordpress #Elementor #Js",
        link:"https://ferremateriales-medina.com/"
    },
    

];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        //offset:["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (<section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.tools}</p>
                    <a href={item.link} target="_blank">
                        <button>Ver Demo</button>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>);
};

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end","start start"],
    });


    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Mis trabajos</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>

            {items.map((item) =>(
                <Single item={item} key={item.id} />

            ))}

        </div>
    );
};

export default Portfolio