import React from 'react';
import useWatch from '../../Hooks/UseWatch';

const ManageItemDetails = ({watch}) => {
    const {title, price, image, description, quantity, supplier } = watch;
    return (
        <table class="table table-bordered border-info">
                <thead>
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
                    <tr>
                        <th scope="row">{watch.title}</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
    );
};

export default ManageItemDetails;