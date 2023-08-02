import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CommonSection from '../components/ui/CommonSection/CommonSection';
import '../styles/wallet.css';

const wallet__data = [
    {
        title: 'Bitcoin',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sint.',
        icon: 'ri-bit-coin-line'
    },

    {
        title: 'Coinbase',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sint.',
        icon: 'ri-coin-line'
    },

    {
        title: 'Metamask',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sint.',
        icon: 'ri-money-cny-circle-line'
    },

    {
        title: 'Ethereum',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sint.',
        icon: 'ri-bit-coin-line'
    },
]

const Wallet = () => {
    return <>
        <CommonSection title='Connect Wallet' />

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center'>
                        <div className='w-50 m-auto'>
                            <h3 className='text-light'>Connect Wallet</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facilis?</p>
                        </div>
                    </Col>

                    {
                        wallet__data.map((item, index) => (
                            <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                                <div className='wallet__item'>
                                    <span><i class={item.icon}></i></span>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    </>
}


export default Wallet
