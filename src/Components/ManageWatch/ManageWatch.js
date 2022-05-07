import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ManageWatch = () => {

    const { watchId } = useParams();
    const [watchDetails, setWatchDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/watch/${watchId}`)
            .then(res => res.json())
            .then(data => setWatchDetails(data));
    }, [watchId]);

    const handleDelivered = () => {
        const quantity = parseInt(watchDetails.quantity) - 1;
        console.log(quantity);
        const url = `http://localhost:5000/watch/${watchId}`;
        fetch(url, {
            
        })
    }

    return (
        <div className='py-5'>
            <Container className='py-5'>
                <h1 className='text-center display-3'>Watch Details and Deliver or Restore</h1>
                <div className="card rounded-3 border-0 shadow-lg my-5 py-5">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={watchDetails.image} className="img-fluid rounded-start object-fit" style={{ height: "100%" }} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title">{watchDetails.title}</h2>
                                <div className="card-text">
                                    <h3>Supplier: {watchDetails.supplier}</h3>
                                    <h3>Price: ${watchDetails.price}</h3>
                                    <h3>Quantity: {watchDetails.quantity}</h3>
                                    <p>Description: {watchDetails.description}</p>
                                </div>
                            </div>
                            <button onClick={handleDelivered} className='btn btn-outline-info'>Deliver</button>
                            <br />
                            <div className="input-group mt-3 " style={{width:"350px"}}>
                                <input type="number" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-info" type="button" id="button-addon2">Restore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default ManageWatch;