import React from 'react';
import useWatch from '../../Hooks/UseWatch';
import InventoryDetails from './InventoryDetails';

const Inventory = () => {
    const [watchs] = useWatch();
    return (
        <div>
            <div className='container py-5'>
                        <h1 className='text-info text-center display-3 py-5 fw-bold'>Inventory</h1>
                        <div className="row g-md-4">
                            {
                                watchs.map(watch => <InventoryDetails
                                    key={watch._id}
                                    watch={watch}
                                >
                                </InventoryDetails>)
                            }
                        </div>
                    </div>
        </div>
    );
};

export default Inventory;