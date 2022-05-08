import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useWatch from '../../Hooks/UseWatch';


const ManageWatch = () => {

    const { watchId } = useParams();
    const [watchs, setWatchs] = useWatch();
    // const [watchDetails, setWatchDetails] = useState({});
    const url = `http://localhost:5000/watch/${watchId}`;

    const deliveredQuantity = parseFloat(watchs.quantity) - 1;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setWatchs(data));
    }, [watchId]);

    const handleDelivered = () => {
        console.log(deliveredQuantity);

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ deliveredQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='py-5'>
            <Container className='py-5'>
                <h1 className='text-center display-3'>Watch Details and Deliver or Restore</h1>
                <div className="card rounded-3 border-0 shadow-lg my-5 py-5">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={watchs.image} className="img-fluid rounded-start object-fit" style={{ height: "100%" }} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title">{watchs.title}</h2>
                                <div className="card-text">
                                    <h3>Supplier: {watchs.supplier}</h3>
                                    <h3>Price: ${watchs.price}</h3>
                                    <h3>Quantity: {watchs.quantity}</h3>
                                    <p>Description: {watchs.description}</p>
                                </div>
                            </div>
                            <button onClick={()=>handleDelivered()} className='btn btn-outline-info'>Deliver</button>
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