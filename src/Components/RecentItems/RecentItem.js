import React from 'react';
import { Container } from 'react-bootstrap';
import useWatch from '../../Hooks/UseWatch';

const RecentItem = () => {
    const [watchs, setWatchs] = useWatch();
    return (
        <div className='hero-section'>
            <Container>
                <div className='row'>
                    <div className="col-md-4">
                        <div class="card bg-dark text-white">
                            <img class="card-img" src="..." alt="Card image"/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RecentItem;