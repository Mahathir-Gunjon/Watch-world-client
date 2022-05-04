import React from 'react';

const InventoryDetails = ({ watch }) => {
    const {title, price, image, description, quantity, supplier } = watch;

    return (
            <div className="col-md-4">
                <div className="card border-0 shadow-lg rounded-3">
                    <img src={image} className="w-75 mx-auto card-img-top fit-img img-fluid" alt="" />
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{title}</h3>
                        <div className='d-flex justify-content-between'>
                        <p className="card-text border-end border-info p-2">Price: ${price}</p>
                        <p className="card-text border-end border-info p-2">Quantity: {quantity}</p>
                        <p className="card-text border-end border-info p-2">Supplier: {supplier}</p>
                        </div>
                        <p className="card-text">{description}</p>
                        <button className='btn btn-outline-info shadow'>Update</button>
                    </div>
                </div>
            </div>
    );
};

export default InventoryDetails;