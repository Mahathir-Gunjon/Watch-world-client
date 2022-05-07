// import userEvent from '@testing-library/user-event';
import React from 'react';
import { toast } from 'react-toastify';
import useWatch from '../../Hooks/UseWatch';


const ManageItem = () => {
    const [watchs, setWatchs] = useWatch();
    // const watchQnt = watchs.quantity;

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/watch/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    toast("Item deleted successfully", { type: "success" });
                    const remaining = watchs.filter(watch => watch._id !== id);
                    setWatchs(remaining);
                })
        }
    }

    return (
        <div className='mt-5'>
            <div className="container">
                <h1 className='pt-5'>Manage Inventory</h1>
                <div className="table-responsive">
                    <table className="table table-bordered border-info mt-5 table-striped table-hover">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">Watch Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                watchs.map(watch => (<tr key={watch._id}>
                                    <th scope="row">{watch.title}</th>
                                    <td>backend e dibone</td>
                                    <td>{watch.quantity}</td>
                                    <td>${watch.price}</td>
                                    <td className='text-center' style={{ width: '190px' }}>
                                        <button className='btn btn-outline-info shadow mx-1'>Update</button>
                                        <button onClick={()=> handleDelete(watch._id)} className='btn btn-info shadow mx-1'>Delete</button>
                                    </td>
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