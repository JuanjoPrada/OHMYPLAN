import { Row, Col, Container } from 'react-bootstrap'
import "./Contact.css"
const ContactPage = () => {
    return (
        <div className="contact-container">
            <figure className="contact-header"></figure>
            <Container>
                <h1 className="title">CONTACTA CON NOSOTROS</h1>
                <Row className="contact-features">
                    <Col lg={4}>
                        <article>
                            <h4>Llámanos</h4>
                            <hr></hr>
                            <p>Te atendemos personalmente de lunes a domingo de 9 a 19:30 horas, 1 h. menos en Canarias.</p>
                            <h5>9001239871</h5>
                        </article>
                    </Col>
                    <Col lg={4}>
                        <article>
                            <h4>Escríbenos</h4>
                            <hr></hr>
                            <p>Haznos llegar tus comentarios a través de nuestro formulario o escríbenos a la dirección</p>
                            <h5><a href="#!">sugerencias@ohmyplan.es</a> </h5>
                        </article>
                    </Col>
                    <Col lg={4}>
                        <article>
                            <h4>Por RRSS</h4>
                            <hr></hr>
                            <p>También puedes contactar con nosotros desde nuestro <strong>Facebook, Twitter, Youtube, Instagram y Linkedin</strong>.</p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ContactPage
