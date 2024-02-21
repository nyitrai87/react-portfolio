import Project from '../Project';
import projects from '../../assets/projects.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProjectGallery = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map(project => (
                    <Col key={project.id}>
                        <Project project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default ProjectGallery;