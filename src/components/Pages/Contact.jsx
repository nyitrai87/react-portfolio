import { useRef } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import './Contact.css'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            )
            .then(
                (result) => {
                    e.target.reset();
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Row className="d-flex justify-content-center g-4">
            <Col xs={12} md={5} xl={3}>
                <Container className="rounded-3 jumbotron-text contact-details">
                    <h2>Contact me!</h2>
                    <p>If you would like to contact me, you can either send me a message here by using the contact form, or you can reach me through the contact options listed below.</p>
                    <section>
                        <div className="contact-opt">
                            <h6><img src="./icons/phone.svg" alt="My phone number" />
                                Phone: <a href="tel:+447949748348">07949748348</a></h6>
                        </div>
                        <div className="contact-opt">
                            <h6><img src="./icons/email.svg" alt="My email address" />
                                Email: <a href="mailto:the.nyitrai@gmail.com">the.nyitrai@gmail.com</a></h6>
                        </div>
                        <div className="contact-opt">
                            <h6><img src="./icons/file.svg" alt="My CV" />
                                <a href="./Adam_Nyitrai_CV.pdf" target="blank">My CV</a></h6>
                        </div>
                        <div className="contact-opt">
                            <h6><img src="./icons/linkedin.svg" alt="My LinkedIn profile" />
                                <a href="https://www.linkedin.com/in/adam-nyitrai/" target="blank">My LinkedIn profile</a></h6>
                        </div>
                        <div className="contact-opt">
                            <h6><img src="./icons/github.svg" alt="My GitHub profile" />
                                <a href="https://github.com/nyitrai87" target="blank">My GitHub profile</a></h6>
                        </div>
                        <div className="contact-opt">
                            <h6><img src="./icons/facebook.svg" alt="My Facebook profile" />
                                <a href="https://www.facebook.com/the.nyitrai/" target="blank">My Facebook profile</a></h6>
                        </div>
                    </section>
                </Container>
            </Col>

            <Col xs={12} md={6} xl={5}>
                <Container className="rounded-3 contact-form">
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email address here..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name here..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" name="message" placeholder="Enter your message here..." rows={5} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="send-btn" onClick={handleShow}>
                            Send
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Your message has been sent!</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant="secondary" className="close-btn" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </Container>
            </Col>
        </Row >
    )
}

export default Contact;