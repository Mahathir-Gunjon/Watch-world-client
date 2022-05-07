import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Additem.css'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Additem = () => {

    const [user] = useAuthState(auth);

    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/watch`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast("Item added successfully", { type: "success" });

        })
    }


    return (
        <div className='add-item-section mt-5 pt-5'>
            <Container>
                <div className='text-center'>
                    <h1>Add Item</h1>
                    <p className='fs-5 text-dark'>Add a new Watch with name and details</p>
                </div>

                <div className="container">
                <div className='text-center form-width mx-auto'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' placeholder='Enter watch name or brand' {...register("title", { required: true })} />
                        <br />
                        <input type='text' placeholder='Supplier name' {...register("supplier", { required: true })} />
                        <br />
                        <input type='number' placeholder='Product Price' {...register("price", { required: true })} />
                        <br />
                        <input type='number' placeholder='Product quantity' {...register("quantity", { required: true })} />
                        <br />
                        <input type='text-area' placeholder='Details' {...register("description", { required: true })} />
                        <br />
                        <input type='text' placeholder='Product Image url' {...register("image", { required: true })} />
                        <br />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
                </div>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Additem;