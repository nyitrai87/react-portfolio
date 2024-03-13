import { Image, Row, Col, Container, Card } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <Row className="d-flex justify-content-center g-4 bio-row">
            <Col xs={12} md={8} xl={6}>
                <Container className="rounded-3 jumbotron-text">
                    <h1 className="display-5 fw-bold">Adam Nyitrai</h1>
                    <h2>Front-End Developer | Crafting Engaging Web Experiences</h2><br />
                    <p className="fs-4">Hello and welcome on my portfolio website! <br /><br />
                        I am a Front-End Developer with a rich background that ranges from warehousing to technical support. My passion for problem-solving led me to earn a certificate in front-end web development from the edX Skills Bootcamp, with A+ grade. Now, I am excited to leverage my skills to create engaging and responsive web experiences. I am always eager to explore new technologies and strive for continuous improvement. Dive in to discover the projects that showcase my journey and growth in the world of web development!</p><br />
                    <h2>My skills, so far:</h2>
                    <p className="fs-4">HTML | CSS | JavaScript | Bootstrap | React.js | Node.js | jQuery | Jest | APIs | Firebase | Firestore | Git | GitHub</p>
                </Container>
            </Col>

            <Col xs={12} md={3} xl={2} className="img-col">
                <Container className="rounded-3 jumbotron-img">
                    <Image className="rounded-3 side-img" src="./images/headshot.png" alt="" />
                </Container>
                <Container className="rounded-3 jumbotron-img mt-4">
                    <h5 id="grade">My Bootcamp Grade</h5>
                    <Image className="rounded-bottom-3 side-img" src="./images/bootcamp.jpeg" alt="" />
                </Container>
            </Col>
        </Row>
    )
}

export default Home;