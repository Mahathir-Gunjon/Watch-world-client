import userEvent from '@testing-library/user-event';
import React from 'react';
import useWatch from '../../Hooks/UseWatch';


const ManageItem = () => {
    const [watchs] = useWatch();
    const watchQnt = watchs.quantity;

    return (
        <div className='mt-5'>
            <div className="container">
                <h1 className='pt-5'>Manage Inventory</h1>
                <div className="table-responsive">
                    <table className="table table-bordered border-info mt-5">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">Watch Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                watchs.map(watch => (<tr key={watch._id}>
                                    <th scope="row">{watch.title}</th>
                                    <td>backend e dibone</td>
                                    <td>{watch.quantity}</td>
                                    <td>${watch.price}</td>
                                    <td>${ }</td>
                                    <td>@mdo</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageItem;