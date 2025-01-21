import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"Sistema de automatización de procesos",
        img: "/projects/diesel-segoviano.png",
        desc: "(En desarrollo) Diseño y desarrollo de un sistema de automatización de envíos y recepción de correos/documentos para Diesel Segoviano.",
        tools:"#NextJs #Tailwind #NodeJs #Prisma #PostgreSQL",
        link:"https://marc7-diesel.vercel.app/"
    },
    {
        id:2,
        title:"Ferremateriales Medina",
        img: "/projects/ferremateriales_landin.png",
        desc: "Landing Page con enfoque responsivo, integración de formulario de contacto funcional, Analytics, optimización SEO básica para mejorar la visibilidad.",
        tools:"#Wordpress #Elementor #Js #GoogleAnalytics",
        link:"https://ferremateriales-medina.com/"
    },
    {
        id:3,
        title:"Portafolio personal",
        img: "/projects/portafoliov1.png",
        desc: "Portafolio personal con biografía, ruta de estudio y empleo, sección de tecnologías y servicios, proyectos, comentarios y formulario de contacto, además de contar con modo oscuro y un selector de colores.",
        tools:"#CSS #HTML #Js",
        link:"https://marc7hedev.github.io/portfoliov1/"
    },
    {
        id:4,
        title:"Music App",
        img: "/projects/musicplayer.png",
        desc: "Sencilla y minimalista aplicación web de reproductor de música haciendo uso de la API de audio de Javascript.",
        tools:"#CSS #HTML #Js #WebAudioAPI",
        link:"https://marc7hedev.github.io/Minimal-music-player/"
    },
    {
        id:5,
        title:"Tacos la Huasteca",
        img: "/projects/tacoslahuasteca.png",
        desc: "Landing Page de taquería, con un diseño simple y responsivo. Cuenta con formulario de contacto, botón de Whatsapp, integración de mapas, entre otras características.",
        tools:"#CSS #Sass #HTML #Js",
        link:"https://marc7hedev.github.io/LaHuastecaVeracruzana/"
    },
    {
        id:6,
        title:"Password Generator",
        img: "/projects/passwordgen.png",
        desc: "Pequeña aplicación web para generar contraseñas seguras empleando variables como longitud, caracteres alfanuméricos y especiales.",
        tools:"#HTML #CSS #Js",
        link:"https://marc7hedev.github.io/Password-Generator/"
    },
    {
        id:7,
        title:"Error Page",
        img: "/projects/errorpage.png",
        desc: "Sencilla y responsiva página de error con una bonita animación y un botón de regreso a la página anterior.",
        tools:"#HTML #CSS #Js",
        link:"https://marc7hedev.github.io/errorpagev1/"
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