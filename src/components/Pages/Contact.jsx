import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "nyitrai_portfolio";
const TEMPLATE_ID = "portfolio_contact";
const PUBLIC_KEY = "duX10OCVP3WX_Uj1C";

const Contact = () => {
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
                    alert('message sent successfully...');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Container className="rounded-3">
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" placeholder="Enter your message here..." rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </Container>
    )
}

export default Contact;