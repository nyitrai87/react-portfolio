import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css'

function ProjectCard({ project }) {
    return (
        <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body className="d-flex">
                <Card.Title text="white">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="card-bottom">
                    <Card.Text className="techs">{project.techs.map((tech, i) => (
                        <img key={i} src={tech} className="tech-logo"></img>
                    ))}</Card.Text>
                    <div className="buttons-div">
                        <a href={project.github}><Button className="github-btn" variant="primary">GitHub Repository</Button></a>
                        {project.deployed !== '' ?
                            <a href={project.deployed}><Button className="deployed-btn" variant="primary">Deployed Site</Button></a>
                            : ""}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;