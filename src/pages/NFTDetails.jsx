import React from 'react';
import CommonSection from '../components/ui/CommonSection/CommonSection';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NFT__DATA } from '../assets/data/data';
import LiveAuction from '../components/ui/LiveAuction/LiveAuction';
import '../styles/nft-details.css';

const NFTDetails = () => {
    const {id} = useParams();
    const singleNft = NFT__DATA.find(item => item.id === id);

    return <>
        <CommonSection title={singleNft.title} />

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <img src={singleNft.imgUrl} alt='' className='single__nft__img w-100' />
                    </Col>

                    <Col lg='6' md='6' sm='6'>
                        <div className='single__nft__content'>
                            <h2>{singleNft.title}</h2>

                            <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
                                <div className='single__nft__seen d-flex align-items-center gap-4'>
                                    <span><i class="ri-eye-line"></i> 234</span>
                                    <span><i class="ri-heart-line"></i> 123</span>
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='single__nft__more d-flex align-items-center gap-2'>
                                        <span><i class="ri-send-plane-line"></i></span>
                                        <span><i class="ri-more-2-line"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className='nft__creator d-flex gap-3 align-items-center'>
                                <div className='creator__img'>
                                    <img src={singleNft.creatorImg} alt='' className='w-100' />
                                </div>

                                <div className='creator__details'>
                                    <p>Created By</p>
                                    <h6>{singleNft.creator}</h6>
                                </div>
                            </div>

                            <p className='my-4'>{singleNft.desc}</p>
                            <button className='place__bid-btn d-flex align-items-center gap-2 w-100'>
                                <i class="ri-shopping-bag-line"></i>
                                <Link to='/wallet'>Place a Bid</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <LiveAuction />
    </>
}


export default NFTDetails
