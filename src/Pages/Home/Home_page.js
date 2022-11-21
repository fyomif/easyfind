import logo from '../../assets/logo.svg';
import './Home_page.css';
import Decoration_corner from "../../Components/general/Decoration/decoration_corner";
import {MultiStepProgressBar} from "../../Components/Form/ProgressBar/MultiStepProgressBar";
import "react-bootstrap";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {MultiStepForm} from "../../Components/Form/MultiStepForm";
import {useState} from "react";
import {questions} from "../../Contents/Questions";

function Home_page() {

    const [index, setIndex] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const totalPagesCount = questions?.length || 0;
    // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
    const [pagesAnswers, setPagesAnswers] = useState({});

    const prevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }

    const nextButton = () => {
        if (index - 3) {
            setIndex(prevIndex => prevIndex + 1);
        } else {
            // clear the form on submit
            setPagesAnswers({});
            setSubmitted(true);
        }
    }

    const onPageAnswerUpdate = (step, answersObj) => {
        setPagesAnswers({...pagesAnswers, [step]: answersObj});
    }

    const handleStart = () => {
        setIndex(1);
        setSubmitted(false);
    }


    return (
        <div className="HomePage">
            <Decoration_corner additional_class={'big_deco'} ></Decoration_corner>


            <Container className="h-100 col-sm-10 col-md-7 col-lg-7 align-self-start">

                <Row className="m-5">
                    <Col className="align-self-start">
                        <img src={logo} className="App-logo" alt="logo" />
                        <MultiStepProgressBar
                            step={index}
                        />

                        <h1 className="Title">
                            Hello guy, Let’s talking about your project<span>.</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        submitted ?
                            <Card>
                                <Card.Body>
                                    <p>Your answers have been submitted!</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={handleStart}>Start Over</Button>
                                </Card.Footer>
                            </Card> :
                            <Card>
                                <Card.Body>
                                    <MultiStepForm
                                        list={questions}
                                        step={index}
                                        onPageUpdate={onPageAnswerUpdate}
                                        pagesAnswers={pagesAnswers}
                                    />
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button onClick={prevButton} disabled={index == 1}>Previous</Button>
                                    <Button onClick={nextButton}>{index == totalPagesCount ? 'Submit' : 'Next'}</Button>
                                </Card.Footer>
                            </Card>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Home_page;
