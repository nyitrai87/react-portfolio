import Project from '../Project';
import projects from '../../assets/projects.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProjectGallery = () => {
    return (
        <>
            <h1>These are my projects!</h1>

            <Row xs={1} md={2} className="g-4">
                {projects.map(project => (
                    <Col key={project.id}>
                        <Project project={project} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default ProjectGallery;