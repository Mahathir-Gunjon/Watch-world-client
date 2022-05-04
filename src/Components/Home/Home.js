import React from 'react';
import { Carousel } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    return (
        <>
            <section className='hero-section d-flex align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 order-md-last">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/P120LKh/Untitled-gfhjdesign.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/Hhf0GdX/Untitled-design.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/bsRHfVc/Untitlezdfgd-design.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            {/* <img src="https://i.ibb.co/Hhf0GdX/Untitled-design.png" alt="" /> */}
                        </div>
                        <div className="col-md-7 mt-md-5">
                            <div className="mt-5 text-black header-text">
                                <h1 className='display-1 md:display-4 text-black fw-bold'><span className='text-info'>Watch</span> World</h1>
                                <p className='fs-5'>I'm a independent photographer with few services. I'm providing photography services like wedding shoot,out door shoots, product photography etc</p>
                                <button type="button" className="btn btn-info btn-lg fw-normal">Inventory</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Inventory/>
        </>
    );
};

export default Home;