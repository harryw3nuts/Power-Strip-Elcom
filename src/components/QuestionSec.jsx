
import Accordion from 'react-bootstrap/Accordion';
const QuestionSec = ({faqHeading,faqInfo}) => {
    if(faqInfo){
        return (
            <>
                <div className="questionWrap">
                    <div className="container">
                        <div className="accordianWrap">
                            {faqHeading && <div className="accordianHead">
                                <h3>{faqHeading}</h3>
                            </div>}
                            <div className="accordionSec">
                                <Accordion defaultActiveKey="0" flush >
                                    {faqInfo.map((faq,index) => {
                                        const {heading,description} = faq;
                                        return (
                                            <Accordion.Item eventKey={index} key={index}>
                                                {heading && <Accordion.Header>{heading}</Accordion.Header>}
                                                {description && <Accordion.Body>
                                                    {description}
                                                </Accordion.Body>}
                                            </Accordion.Item>
                                        )
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return ''
}

export default QuestionSec;