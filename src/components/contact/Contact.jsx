import React from 'react'
import "./contact.scss";

const Contact = () => {
    return (
    <div className="contact">
        <div className="textContainer">
            <h1>Estoy a tus órdenes</h1>
            <div className="item">
                <h2>Ubicación</h2>
                <span>Guanajuato, MX</span>
            </div>
            <div className="item">
                <h2>E-mail</h2>
                <span>contacto@marco-rangel.tech</span>
            </div>
        </div>
        <div className="formContainer"></div>
    </div>    
    )
}   
export default Contact