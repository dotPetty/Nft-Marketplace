import React, { useRef } from 'react'
import CommonSection from '../components/ui/CommonSection/CommonSection';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/contact.css';

const Contact = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const subjectRef = useRef('');
    const messageRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault()
    }

    return <>
        <CommonSection title='Contact' />

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' className='m-auto text-center text-light'>
                        <h2>Connect With Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className='contact mt-4'>
                            <form onSubmit={handleSubmit}>
                                <div className='form__input'>
                                    <input type='text' placeholder='Enter your name' ref={nameRef} />
                                </div>

                                <div className='form__input'>
                                    <input type='email' placeholder='Enter your email' ref={emailRef} />
                                </div>

                                <div className='form__input'>
                                    <input type='text' placeholder='Enter subject' ref={subjectRef} />
                                </div>

                                <div className='form__input'>
                                    <textarea rows='7' placeholder='Write message' ref={messageRef}></textarea>
                                </div>

                                <button className='send__btn'>Send a Message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}


export default Contact
