
import Accordion from 'react-bootstrap/Accordion';
const QuestionSec = () => {
    return (
        <>
            <div className="questionWrap">
                <div className="container">
                    <div className="accordianWrap">
                        <div className="accordianHead">
                            <h3>Frequently asked questions</h3>
                        </div>
                        <div className="accordionSec">
                            <Accordion defaultActiveKey="0" flush >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Is the Power Strip suitable for international use?</Accordion.Header>
                                    <Accordion.Body>
                                        Our power strip product includes a comprehensive safety and health management system that ensures the highest standards of safety for our users. We prioritize the well-being of our customers and have implemented strict safety protocols in the design, manufacturing, and testing of our products. Our commitment to safety is a top priority, and we continuously monitor and improve our safety and health management system to provide the best possible product experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How many devices can I charge simultaneously?</Accordion.Header>
                                    <Accordion.Body>
                                        Our power strip product includes a comprehensive safety and health management system that ensures the highest standards of safety for our users. We prioritize the well-being of our customers and have implemented strict safety protocols in the design, manufacturing, and testing of our products. Our commitment to safety is a top priority, and we continuously monitor and improve our safety and health management system to provide the best possible product experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do you have a safety and health management system?</Accordion.Header>
                                    <Accordion.Body>
                                        Our power strip product includes a comprehensive safety and health management system that ensures the highest standards of safety for our users. We prioritize the well-being of our customers and have implemented strict safety protocols in the design, manufacturing, and testing of our products. Our commitment to safety is a top priority, and we continuously monitor and improve our safety and health management system to provide the best possible product experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionSec;