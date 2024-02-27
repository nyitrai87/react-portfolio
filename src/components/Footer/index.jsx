import './index.css'

function Footer() {
    return (
        <footer>
            <h6>2024 © Created by Adam Nyitrai with
                <img src="./logos/react.png" alt="React" title="React" className="tech-icon" />
                <img src="./logos/bootstrap.png" alt="Bootstrap" title="Bootstrap" className="tech-icon" />
                <img src="./logos/html.png" alt="HTML" title="HTML" className="tech-icon" />
                <img src="./logos/css.png" alt="CSS" title="CSS" className="tech-icon" />
            </h6>
            <div className="links">
                <a href="tel:+447949748348" title="My phone number: 07949748348"><img src="./icons/phone.svg" alt="My phone number" className="contact-icon" /></a>
                <a href="mailto:the.nyitrai@gmail.com" title="My email address: the.nyitrai@gmail.com"><img src="./icons/email.svg" alt="My email address" className="contact-icon" /></a>
                <a href="./Adam_Nyitrai_CV.pdf" target="blank" title="Check my CV"><img src="./icons/file.svg" alt="My CV" className="contact-icon" /></a>
                <a href="https://www.linkedin.com/in/adam-nyitrai/" target="blank" title="My LinkedIn profile"><img src="./icons/linkedin.svg" alt="My LinkedIn profile" className="contact-icon" /></a>
                <a href="https://github.com/nyitrai87" target="blank" title="My GitHub profile"><img src="./icons/github.svg" alt="My GitHub profile" className="contact-icon" /></a>
                <a href="https://www.facebook.com/the.nyitrai/" target="blank" title="My Facebook profile"><img src="./icons/facebook.svg" alt="My Facebook profile" className="contact-icon" /></a>
            </div>
        </footer>
    );
}

export default Footer;