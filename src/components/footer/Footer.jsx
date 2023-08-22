//IMPORT HOOK REACT 
import React from "react";
//IMPORT CSS
import "./footer.scss";

function Footer() {
    return (
        <>
        {/* FOOTER */}
        <footer className="footer">
            <p className="footer__copyright">
                &copy; {new Date().getFullYear()} Portfolio - Franck Cardin
            </p>
            <div className="footer__socialIcons">
                <a
                    href="https://github.com/FranckCardin"
                    aria-label="GitHub"
                    target="_blank"
                    className="footer__socialIcons_link"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/franck-cardin-a30b95a4/"
                    aria-label="LinkedIn"
                    target="_blank"
                    className="footer__socialIcons_link"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer;