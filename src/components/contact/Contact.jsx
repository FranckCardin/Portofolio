//IMPORT HOOK REACT 
import React from "react";
//IMPORT CSS
import "./contact.scss";

function Contact() {
    return (
      <>
      <hr className="contact__hr" />
      {/* SECTION CONTACT */}
      <section className="contact" id="contact">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__description">N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations.</p>
        <a href="mailto:franck.cardin@free.fr" className=" contact__link btn btn-outline-warning btn-lg active" role="button" aria-pressed="true">
          Contactez-moi<i className="contact__icon fa-solid fa-pen"></i>
          </a>
      </section>
      </>
    )
}

export default Contact;


