import './index.css'

function Footer() {
    return (
        <footer>
            <h6>2024 © Adam Nyitrai</h6>
            <div className="links">
                <a href="tel:+447949748348"><img src="./icons/phone.svg" alt="My phone number" /></a>
                <a href="mailto:the.nyitrai@gmail.com"><img src="./icons/email.svg" alt="My email address" /></a>
                <a href="./Adam_Nyitrai_CV.pdf" target="blank"><img src="./icons/file.svg" alt="My CV" /></a>
                <a href="https://www.linkedin.com/in/adam-nyitrai/" target="blank"><img src="./icons/linkedin.svg" alt="My LinkedIn profile" /></a>
                <a href="https://github.com/nyitrai87" target="blank"><img src="./icons/github.svg" alt="My GitHub profile" /></a>
                <a href="https://www.facebook.com/the.nyitrai/" target="blank"><img src="./icons/facebook.svg" alt="My Facebook profile" /></a>
            </div>
        </footer>
    );
}

export default Footer;